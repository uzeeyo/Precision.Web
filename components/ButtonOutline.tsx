import { NextPage } from "next";
import { MouseEventHandler } from "react";

interface Props {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
  onClick?: MouseEventHandler;
}

const ButtonOutline = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={`bg-transparent border-2 px-5 py-2 rounded-md text-orange-500 border-orange-500 hover:text-orange-700 hover:border-orange-700 ease-in duration-150 transition-colors transit ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
