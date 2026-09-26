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
  return res.status(502).json({ error: "خطا در ارتباط با سرویس هوش مصنوعی" });
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
