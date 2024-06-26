import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <div>
      <Header />
      <Input userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
