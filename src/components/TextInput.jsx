import { useState } from "react";
import toPersianNumber from "../helper/toPersianDigit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

import AnalyzeBtn from "./AnalyzeBtn";

const TextInput = function ({ handleAnalyze }) {
  const [text, setText] = useState("");

  const clearInputBtn = () => {
    setText("");
    // setCount(0);
  };

  const count = text.length;

  return (
    <div dir="rtl" className="mainContainer">
      <div className="mainDescription">
        <FontAwesomeIcon className="commentIcon" icon={faComment} />
        <strong>موقعیت رابطت رو بنویس :</strong>
      </div>
      <div className="inputTextarea">
        <textarea
          value={text}
          placeholder={`اون گفت: "من خیلی اهل پیام دادن نیستم"، اما همش پست میزاره."`}
          maxLength={800}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="inputControl">
          <span className="characterCounter">
            {`${toPersianNumber(count)}/${toPersianNumber(800)}`}
          </span>
          {count > 0 ? (
            <button className="clearBtn" onClick={clearInputBtn}>
              پاک کردن
            </button>
          ) : null}
        </div>
      </div>
      <AnalyzeBtn handleAnalyze={handleAnalyze} />
    </div>
  );
};
export default TextInput;

/*

    <div className="inputContainer">
      <textarea
        placeholder={`اون گفت: "من خیلی اهل پیام دادن نیستم"، اما همش پست میزاره."`}
        maxLength={1000}
        dir="rtl"
        onChange={(e) => setCount(e.target.value.length)}
      />
      <div className="inputControl">
        <span className="characterCounter">
          {`${toPersianNumber(count)}/${toPersianNumber(1000)}`}
        </span>
        {count > 0 ? <button className="clearBtn">پاک کردن</button> : null}
      </div>
    </div>

*/
