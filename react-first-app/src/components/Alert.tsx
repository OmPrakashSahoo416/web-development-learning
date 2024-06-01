import { ReactNode } from "react";

interface Props {
    children:ReactNode;
}

function Alert({children}:Props) {
  return (
    <div className="font-medium font-['Fira_Code'] p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
      {children}
    </div>
  );
}

export default Alert;
