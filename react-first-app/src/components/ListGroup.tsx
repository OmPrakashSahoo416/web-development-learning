// import { Fragment } from "react";

import { useState } from "react";

// import { list } from "postcss";

// import { MouseEvent } from "react";

// {items: [], heading: string}
interface Props {
  items:string[];
  heading:string;
  onSelectItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectItem} : Props) {
  // let selectedIndex = 0; this wont work because it is a local
  // variable and it does not change dynamically
  // to implement this we use something case state
  // state tells that this component has variables that will
  // change over time on click or something else
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // mouse events are not recognized by TS
  // so doing type annotation to use events functionalities
  // auto complete also will not work if you dont use it
  // const handleClick = (event : MouseEvent) => console.log(event.type)

  // If you need to add if or other statements
  // in the return statement use in the {...}
  // or else make it a variable or function outside return and
  // use it in return statement next
  // return statement only supports html or react components
  return (
    // {No need to import also} Short way of telling react to use fragment and grab all the children...
    <>
      <h1 className="text-2xl p-2">{heading}</h1>
      <ul className="list-disc p-2 ">
        {items.map((item, index) => (
          // changing from list item to button
          // because tailwindcss supports focus in button on li tag
          
          <button
            className={
              selectedIndex === index
                ? "focus:bg-green-400 w-64 hover:bg-slate-300 p-2 list-item border-2 m-4 border-black"
                : "w-64 hover:bg-slate-300 p-2 list-item border-2 m-4 border-black"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </button>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
