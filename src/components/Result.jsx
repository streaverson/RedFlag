import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePollVertical,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import CircleProgress from "./CircleProgress";
import ResultText from "./ResultText";
import Footer from "./Footer";
function Result() {
  const [progress, setProgress] = useState(65);

  return (
    <>
      <div dir="rtl" className="mainContainer resultContainer">
        <h2 style={{ textAlign: "right", padding: "10px 20px" }}>
          نتیجه
          <FontAwesomeIcon icon={faSquarePollVertical} />
        </h2>

        <div className="resultMessage">
          <CircleProgress percentage={progress} />
          <ResultText percentage={progress} />
        </div>
        <hr
          style={{
            color: "#999",
            margin: "10px 20px 0 20px",
            border: "none",
            height: "1.1px",
            backgroundColor: "#999",
          }}
        />
        <div
          style={{
            textAlign: "right",
            padding: "20px 20px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faCircleExclamation} color="#333" />
          <p style={{ color: "#666" }}>
            این فقط یک ابزار سرگرمی و راهنماییه و به معنای حکم قطعی درباره رابطه
            نیست.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Result;
