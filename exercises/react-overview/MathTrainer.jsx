// https://codesandbox.io/s/math-trainer-8h0os
import { useState } from "react";

const randomNumber = () => Math.ceil(Math.random() * 20);

export default function App() {
  const [a, setA] = useState(randomNumber());
  const [b, setB] = useState(randomNumber());
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("Enter the sum!");

  const newTask = () => {
    setA(randomNumber());
    setB(randomNumber());
    setAnswer("");
    setStatus("Enter the sum!");
  };

  const checkAnswer = () => {
    if (Number(answer) === a + b) {
      setStatus("Correct!");
    } else {
      setStatus("Incorrect!");
    }
  };

  return (
    <div>
      <button onClick={() => newTask()}>new task</button>
      <hr />
      <div>
        {a} + {b} ={" "}
        <input
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />{" "}
        <button onClick={() => checkAnswer()}>check answer</button>
      </div>
      <div>
        <strong>{status}</strong>
      </div>
    </div>
  );
}
