// import { useState } from "react";
import { useState } from "react";
import Result from "./components/Result";
import HeroTitle from "./components/HeroTitle";
import TextInput from "./components/TextInput";

import Header from "./components/Header";
function App() {
  // const [inputValue, setInputValue] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  // function handleKey(e) {
  //   setCount((prev) => prev + 1);
  // }

  const handleResult = function () {
    setIsAnswered((prev) => !prev);
  };

  return (
    <>
      <Header />
      {!isAnswered ? (
        <>
          <HeroTitle title={`ببین این ماجرا چقدر رد فلگه`} />
          <TextInput handleAnalyze={handleResult} />
        </>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;

/*
    <div className="container">
      <Header />
      <div>
        <section className="main">
          <div className="animateFlag flag">🚩</div> 
          <h1 className="title">پرچم قرمز</h1>
          <p className="description">
            <span>🤓</span>
            متنو بزار ، ببینیم طرف رد فلگه یا نه. قول میدم راستشو بگم
          </p>
          <TextInput />
          <ResultBtn resultBtn={handleResult} />
          <div className="resultSection"></div>
          <div style={{ margin: "30px 0 0 0" }}>
            <p style={{ color: "#86686d", fontSize: ".9rem" }}>
              <span>توسعه و ساخت توسط</span>
              <a
                href="https://github.com/streaverson"
                style={{ color: "#493f41", margin: "0 10px" }}
                target="_blank"
              >
                <span style={{ padding: "0 5px" }}> streaverson</span>
              </a>
              این جایگزین دوستاتون نیست❤️.
            </p>
          </div>
        </section>
      </div>
    </div>


*/
