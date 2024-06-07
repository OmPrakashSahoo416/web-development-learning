import Square from "./Square";

function CalculateWinner(squaresArray) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
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
      return [x, y, z, squaresArray[x]];
    }
  }

  return [null, null, null, null];
}

function Board({ value, squares, handlePlay }) {
  function handleSquareClick(i) {
    if (squares[i] || CalculateWinner(squares)[3]) {
      return;
    }

    const updatedSquares = squares.slice();

    handlePlay(updatedSquares);
    updatedSquares[i] = value === "X" ? "O" : "X";
  }

  let winnerStatus = "";
  if (CalculateWinner(squares)[3]) {
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
      <div className="flex">
        <div className="p-2 mt-3 h-10 mr-2 w-32 text-center font-bold border-2 border-red-700">
          {winnerStatus}
        </div>
        <button
          onClick={handleOnRefreshClick}
          className={
            winnerStatus[0] != "W" && winnerStatus[0] != "T"
              ? "hidden"
              : "border-2 p-2 h-10 m-auto mt-3 mr-2 border-red-700 hover:text-slate-50 hover:bg-red-700"
          }
        >
          Play Again!
        </button>
        <div className="w-64">
          <div className="mt-3 mr-0 flex">
            <div className="grid grid-cols-3 rounded-md grid-rows-3 gap-2 border-2 border-black p-3">
              <Square
                value={squares[0]}
                winner={
                  CalculateWinner(squares)[0] === 0 ||
                  CalculateWinner(squares)[1] === 0 ||
                  CalculateWinner(squares)[2] === 0
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(0)}
              />
              <Square
                value={squares[1]}
                winner={
                  CalculateWinner(squares)[0] === 1 ||
                  CalculateWinner(squares)[1] === 1 ||
                  CalculateWinner(squares)[2] === 1
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(1)}
              />
              <Square
                value={squares[2]}
                winner={
                  CalculateWinner(squares)[0] === 2 ||
                  CalculateWinner(squares)[1] === 2 ||
                  CalculateWinner(squares)[2] === 2
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(2)}
              />
              <Square
                value={squares[3]}
                winner={
                  CalculateWinner(squares)[0] === 3 ||
                  CalculateWinner(squares)[1] === 3 ||
                  CalculateWinner(squares)[2] === 3
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(3)}
              />
              <Square
                value={squares[4]}
                winner={
                  CalculateWinner(squares)[0] === 4 ||
                  CalculateWinner(squares)[1] === 4 ||
                  CalculateWinner(squares)[2] === 4
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(4)}
              />
              <Square
                value={squares[5]}
                winner={
                  CalculateWinner(squares)[0] === 5 ||
                  CalculateWinner(squares)[1] === 5 ||
                  CalculateWinner(squares)[2] === 5
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(5)}
              />
              <Square
                value={squares[6]}
                winner={
                  CalculateWinner(squares)[0] === 6 ||
                  CalculateWinner(squares)[1] === 6 ||
                  CalculateWinner(squares)[2] === 6
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(6)}
              />
              <Square
                value={squares[7]}
                winner={
                  CalculateWinner(squares)[0] === 7 ||
                  CalculateWinner(squares)[1] === 7 ||
                  CalculateWinner(squares)[2] === 7
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(7)}
              />
              <Square
                value={squares[8]}
                winner={
                  CalculateWinner(squares)[0] === 8 ||
                  CalculateWinner(squares)[1] === 8 ||
                  CalculateWinner(squares)[2] === 8
                    ? true
                    : false
                }
                onSquareClick={() => handleSquareClick(8)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
