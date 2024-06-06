// import { useState } from "react";

function Square({value,onSquareClick}) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   if (value === "X") {
  //     setValue("O");
  //   } else {
  //     setValue("X");
  //   }

  //   // alert("You clicked!");
  // }

  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-slate-100 rounded-sm hover:drop-shadow-xl hover:bg-red-600 hover:text-slate-100 hover:border-none border-red-800 border-2 w-16 h-16 text-center align-middle text-red-600 text-2xl font-bold"
      >
        {value}
      </button>
    </>
  );
}

export default Square;
