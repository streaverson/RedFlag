import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

function ContactMe() {
  return (
    <>
      <div dir="rtl" className="mainContainer">
        <h2 style={{ textAlign: "right", padding: "10px 20px" }}>
          تماس با من
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
        </h2>

        <div style={{ padding: "0 20px 20px", textAlign: "right" }}>
          <p style={{ color: "#666", lineHeight: "1.8" }}>
            پیشنهاد، انتقاد، یا باگی پیدا کردی؟ خوشحال میشم بشنوم.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "15px",
            }}
          >
            <a
              href="mailto:amirmahdi.valadkhani@gmail.com"
              style={{
                color: "#493f41",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#EA4335" }} />
              amirmahdi.valadkhani@gmail.com
            </a>

            <a
              href="https://t.me/amirStreaverrDev"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#493f41",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faTelegram} style={{ color: "#0088CC" }} />
              تلگرام
            </a>

            <a
              href="https://instagram.com/amir_streaver_dev"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#493f41",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#E4405F" }}
              />
              اینستاگرام
            </a>
          </div>
        </div>

        <hr
          style={{
            color: "#999",
            margin: "10px 20px 0",
            border: "none",
            height: "1.1px",
            backgroundColor: "#999",
          }}
        />

        <div
          style={{
            textAlign: "right",
            padding: "20px",
            color: "#86686d",
            fontSize: ".9rem",
          }}
        >
          پاسخ‌گویی معمولاً ظرف چند روز کاری انجام می‌شه.
          <div style={{ color: "#333", margin: "5px 0" }}>
            دوستدار شما امیر ولدخانی🧑🏻‍💻
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactMe;
