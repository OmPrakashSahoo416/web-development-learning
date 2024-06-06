import { useState } from "react";
import Square from "./Square";

function Board() {

  const [value,setValue] = useState("O");

  const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null])

  function handleSquareClick(i) {
    if (squares[i]) {
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



  return (
    <>
      <div className="mt-5 flex  items-center justify-center">
        <div className="grid grid-cols-3 rounded-md grid-rows-3 gap-2 border-2 border-black p-3">
          <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;
