// import { useState } from "react";

function Square({value,onSquareClick, winner}) {
  

  return (
    <>
      <button
        onClick={onSquareClick}
        className={winner === false ? "bg-slate-100 rounded-sm hover:drop-shadow-2xl hover:bg-red-600 hover:text-slate-100 hover:border-none border-red-800 border-2 w-16 h-16 text-center text-red-600 text-2xl font-bold":"bg-yellow-700 rounded-sm border-red-800 border-2 w-16 h-16 text-center text-yellow-100 text-2xl font-bold"}
      >
        {value}
      </button>
    </>
  );
}

export default Square;
