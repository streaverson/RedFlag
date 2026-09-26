import { useState } from "react";
import Result from "./components/Result";
import HeroTitle from "./components/HeroTitle";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";

function App() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [userText, setUserText] = useState("");
  const [showContact, setShowContact] = useState(false);

  const handleResult = function (text) {
    setUserText(text);
    setIsAnswered(true);
  };

  const goHome = function () {
    setShowContact(false);
    setIsAnswered(false);
    setUserText("");
  };

  const activePage = showContact ? "contact" : "home";

  return (
    <>
      <Header
        activePage={activePage}
        onHomeClick={goHome}
        onContactClick={() => setShowContact(true)}
      />
      {showContact ? (
        <ContactMe onBack={() => setShowContact(false)} />
      ) : !isAnswered ? (
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
