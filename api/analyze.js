import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const DAILY_LIMIT = 3;
const GAPGPT_BASE_URL = "https://api.gapgpt.app/v1";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text } = req.body || {};
    const cleanText = typeof text === "string" ? text.trim() : "";

    if (!cleanText || cleanText.length > 800) {
      return res
        .status(400)
        .json({ error: "متن نامعتبر است (حداکثر ۸۰۰ کاراکتر)" });
    }

    const ip =
      (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
      req.socket?.remoteAddress ||
      "unknown";

    const today = new Date().toISOString().slice(0, 10);
    const key = `ratelimit:${ip}:${today}`;

    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, 60 * 60 * 24);
    }

    if (count > DAILY_LIMIT) {
      return res.status(429).json({
        error: "محدودیت روزانه (۳ بار) پر شده است. فردا دوباره امتحان کن.",
      });
    }

    const response = await fetch(`${GAPGPT_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GAPGPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              'تو یک تحلیلگر متن هستی. متن کاربر را که درباره یک رابطه یا موقعیت شخصی است بخوان. خروجی را فقط و فقط به‌صورت یک JSON خالص با این ساختار دقیق برگردان، بدون هیچ متن اضافه یا Markdown: {"percent": عدد صحیح بین 0 تا 100 که نشان‌دهنده درصد "رد فلگ" بودن رفتار توصیف‌شده است, "advice": "یک نصیحت کوتاه و صمیمی، دقیقاً در دو خط، به زبان فارسی و لحن دوستانه و امروزی"}',
          },
          { role: "user", content: cleanText },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("GapGPT error:", response.status, errText);
      return res
        .status(502)
        .json({ error: "خطا در ارتباط با سرویس هوش مصنوعی" });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content?.trim() || "";

    let percent = null;
    let advice = "";

    try {
      const cleanedRaw = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleanedRaw);
      percent = Math.min(100, Math.max(0, parseInt(parsed.percent, 10)));
      advice = typeof parsed.advice === "string" ? parsed.advice.trim() : "";
    } catch (parseErr) {
      console.error("JSON parse failed:", raw);
    }

    if (percent === null || isNaN(percent)) {
      return res.status(502).json({ error: "پاسخ نامعتبر از مدل" });
    }

    return res.status(200).json({
      percent,
      advice,
      remaining: Math.max(0, DAILY_LIMIT - count),
    });
  } catch (err) {
    console.error("analyze error:", err);
    return res.status(500).json({ error: "خطای داخلی سرور" });
  }
}
