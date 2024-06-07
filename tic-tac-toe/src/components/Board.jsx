import { useState } from "react";
import Square from "./Square";

function CalculateWinner(squaresArray) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 6, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (
      squaresArray[x] &&
      squaresArray[x] === squaresArray[y] &&
      squaresArray[y] === squaresArray[z]
    ) {
      return squaresArray[x];
    }
  }

  return null;
}

function Board() {
  const [value, setValue] = useState("O");

  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function handleSquareClick(i) {
    // console.log(CalculateWinner(squares));
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const updatedSquares = squares.slice();

    if (value === "O") {
      updatedSquares[i] = "X";
      setValue("X");
    } else {
      updatedSquares[i] = "O";
      setValue("O");
    }

    setSquares(updatedSquares);
  }

  let winnerStatus = "";
  if (CalculateWinner(squares)) {
    winnerStatus = "Winner: " + value;
  } else {
    winnerStatus = "Next Turn: " + (value === "X" ? "O" : "X");
  }

  function handleOnRefreshClick() {
    window.location.reload();
  }

  // console.log(squares.includes(null));
  if (!squares.includes(null)) {
    winnerStatus = "Tie";
  }

  return (
    <>
      <div className="p-2 m-auto w-32 text-center font-bold mt-3 border-2 border-red-700">
        {winnerStatus}
      </div>
      <button
        onClick={handleOnRefreshClick}
        className={
          winnerStatus[0] != "W"
            ? "border-2 hidden p-2 m-auto mt-3 border-red-700 hover:text-slate-50 hover:bg-red-700"
            : "border-2 p-2 block m-auto mt-3 border-red-700 hover:text-slate-50 hover:bg-red-700"
        }
      >
        Play Again!
      </button>
      <div className="mt-3 flex  items-center justify-center">
        <div className="grid grid-cols-3 rounded-md grid-rows-3 gap-2 border-2 border-black p-3">
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
          />
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
          />
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
