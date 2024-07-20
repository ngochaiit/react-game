import React, { useState } from "react";
import { Question } from "@/app/helpers/Question";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const chooseOption = (option: string) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Question[currentQuestion].answer === optionChosen) {
      alert("You got the correct answer");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Wrong answer");
    }
  };

  return (
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor: "lightseagreen",
        boxShadow: " 0 0 10px rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{Question[currentQuestion].prompt}</h1>
      <div>
        <button onClick={() => chooseOption("a")}>
          {Question[currentQuestion].a}
        </button>
        <button onClick={() => chooseOption("b")}>
          {Question[currentQuestion].b}
        </button>
        <button onClick={() => chooseOption("c")}>
          {Question[currentQuestion].c}
        </button>
        <button onClick={() => chooseOption("d")}>
          {Question[currentQuestion].d}
        </button>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  );
}
