import { useState } from "react";
import Board from "./Board";

function Game() {
  const [value, setValue] = useState("O");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquaresArray = history[currentMove];

  function handlePlay(updatedSquares) {
    const updateHistory = [...history.slice(0, currentMove + 1), updatedSquares];
    setHistory(updateHistory);
    setCurrentMove(updateHistory.length - 1);
    if (value === "O") {
      setValue("X");
    } else {
      setValue("O");
    }

  }

  function jumpTo(moveNum) {
    setCurrentMove(moveNum);
    setValue((moveNum % 2 === 0 ? "O" : "X"));
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
        if(move === currentMove) {
            desc = "You are at move " + move;
        }else {

            desc = "Jump to move " + move;
        }
    } else {
      desc = "Jump to game start";
    }
    return (
      <li key={move}>
        <button
          className="p-2 mb-1 hover:text-slate-50 hover:bg-red-700  rounded-md border-2 border-red-700"
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="flex">
      <Board
        value={value}
        squares={currentSquaresArray}
        handlePlay={handlePlay}
      ></Board>
      <div>
        <ol className="mt-3">{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
