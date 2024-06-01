interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

// tailwind css do not support dynamic naming of classes so
// you can not do bg- + color + -500 or something like that
// you should do bg-red-500 directly

function ButtonClassic({ children, onClick, color = "bg-green-300" }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          "p-3 rounded-md m-3 font-semibold hover:text-slate-50 hover:bg-slate-800 " +
          color
        }
      >
        {children}
      </button>
      
    </div>
  );
}

export default ButtonClassic;
