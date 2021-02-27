// https://codesandbox.io/s/tic-tac-toe-fxuec

import { useState } from "react";

const otherPlayer = (player: string): string => (player === "X" ? "O" : "X");

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const squareStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  width: "2rem",
  height: "2rem",
  fontSize: "1.5rem",
  fontFamily: "sans-serif",
};

export default function TicTacToeApp() {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );
  const [player, setPlayer] = useState<string>("X");
  const winner = calculateWinner(squares);
  const boardFull = squares.every((square) => square !== null);
  const gameOver = winner || boardFull;

  const restart = () => {
    setSquares(Array(9).fill(null));
    setPlayer("X");
  };

  const handleClick = (index: number) => {
    if (winner || squares[index]) {
      return;
    }
    const newBoard = squares.slice();
    newBoard[index] = player;
    setSquares(newBoard);
    setPlayer(otherPlayer(player));
  };

  return (
    <div>
      <div>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ display: "flex" }}>
            {[0, 1, 2].map((j) => {
              const index = i * 3 + j;
              return (
                <div
                  key={j}
                  style={squareStyle}
                  onClick={() => handleClick(index)}
                >
                  {squares[index]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {gameOver ? (
        <div>
          {winner ? `Winner: ${winner}` : "Draw"}
          <button onClick={restart}>play again</button>
        </div>
      ) : (
        <div>Next player: {player}</div>
      )}
    </div>
  );
}
