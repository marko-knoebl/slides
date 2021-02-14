import React, { useState } from "react";
import arrayShuffle from "array-shuffle";
// API responses will be HTML-escaped
import { decode } from "html-entities";

export default function App() {
  const [screen, setScreen] = useState<"start" | "question" | "result">(
    "start"
  );
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState<Array<string>>([]);
  const [userAnswer, setUserAnswer] = useState("");

  const nextQuestion = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?" +
        "amount=1&category=9&difficulty=easy&type=multiple"
    );
    const questionObj = (await res.json()).results[0];
    const question = decode(questionObj.question);
    const correctAnswer = decode(questionObj.correct_answer);
    const incorrectAnswers = questionObj.incorrect_answers.map((ans: string) =>
      decode(ans)
    );
    const allAnswers = arrayShuffle([correctAnswer, ...incorrectAnswers]);
    setQuestion(question);
    setCorrectAnswer(correctAnswer);
    setAllAnswers(allAnswers);
    setScreen("question");
  };

  const onAnswer = (answer: string) => {
    setUserAnswer(answer);
    setScreen("result");
  };

  if (screen === "start") {
    return (
      <div>
        <h1>Trivia Quiz</h1>
        <button onClick={() => nextQuestion()}>start</button>
      </div>
    );
  } else if (screen === "question") {
    return (
      <div>
        <h1>Trivia Quiz</h1>
        <p>{question}</p>
        <div>
          <button onClick={() => onAnswer(allAnswers[0])}>
            {allAnswers[0]}
          </button>
          <button onClick={() => onAnswer(allAnswers[1])}>
            {allAnswers[1]}
          </button>
          <button onClick={() => onAnswer(allAnswers[2])}>
            {allAnswers[2]}
          </button>
          <button onClick={() => onAnswer(allAnswers[3])}>
            {allAnswers[3]}
          </button>
        </div>
      </div>
    );
  } else if (screen === "result") {
    return (
      <div>
        <h1>Trivia Quiz</h1>
        <p>correct answer: {correctAnswer}</p>
        <p style={{ color: userAnswer === correctAnswer ? "green" : "red" }}>
          your answer: {userAnswer}
        </p>
        <div>
          <button onClick={() => nextQuestion()}>next question</button>
        </div>
      </div>
    );
  }
}
