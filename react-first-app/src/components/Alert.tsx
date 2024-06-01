

interface Props {
    children:string;
    onClick:() => void;
}

function Alert({children, onClick}:Props) {
  return (
    <div className="flex items-center font-medium p-4 justify-between text-sm text-red-800 rounded-lg bg-red-100" role="alert">
      {children}
      <button onClick={onClick} className="text-red-800 border-2 border-red-600 hover:bg-red-600 hover:text-red-50 p-2">
        Close
      </button>
    </div>
  );
}

export default Alert;
