// https://codesandbox.io/s/prime-number-quiz-jhs7t
import { useState } from "react";

const randomOddNumber = () => Math.floor(Math.random() * 50) * 2 + 1;

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default function App() {
  const [number, setNumber] = useState(randomOddNumber());
  const [lastCorrect, setLastCorrect] = useState(true);
  const [numTotal, setNumTotal] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const checkAnswer = (userAnswer) => {
    if (userAnswer === isPrime(number)) {
      setLastCorrect(true);
      setNumCorrect(numCorrect + 1);
    } else {
      setLastCorrect(false);
    }
    setNumTotal(numTotal + 1);
    setNumber(randomOddNumber());
  };

  return (
    <div>
      {lastCorrect ? null : <strong>incorrect</strong>}
      <p>Is {number} a prime number?</p>
      <button onClick={() => checkAnswer(true)}>yes</button>
      <button onClick={() => checkAnswer(false)}>no</button>
      <p>
        {numCorrect} / {numTotal}
      </p>
    </div>
  );
}
