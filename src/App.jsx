import { useState } from "react";
import Result from "./components/Result";
import HeroTitle from "./components/HeroTitle";
import TextInput from "./components/TextInput";
import Header from "./components/Header";

function App() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [userText, setUserText] = useState("");

  const handleResult = function (text) {
    setUserText(text);
    setIsAnswered(true);
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
        <Result text={userText} />
      )}
    </>
  );
}

export default App;
