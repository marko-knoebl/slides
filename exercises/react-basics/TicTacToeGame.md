# Tic-Tac-Toe Game

Create a tic-tac-toe game that can be played locally in the browser.

The came should let the players place marks (X or O) on a 3x3 grid in turns. When one player gets 3 in a row or the board is full it should display the winner (if there is one) and allow for starting a new game.

This exercise is based on the official React tutorial: <https://reactjs.org/tutorial/tutorial.html>

## Hints

function to calculate a winner:

```ts
// taken from the official react tutorial
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
```

you can store the game state in an array:

```ts
const [squares, setSquares] = useState<Array<string | null>>(
  Array(9).fill(null)
);
```

possible component structure:

- TicTacToeApp
  - Board
    - Square
    - Square
    - Square
    - ...
