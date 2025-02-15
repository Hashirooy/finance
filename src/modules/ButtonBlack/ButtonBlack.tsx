import "./ButtonBlack.css";
import { ReactNode } from "react";

interface BlackButtonProps {
  onClick: () => void;
  width: string;
  height: string;
  children: ReactNode; // Define the type of 'children'
}

export const BlackButton = ({
  children,
  width,
  height,
  onClick,
}: BlackButtonProps) => {
    

  const submitClick = (e: React.FormEvent) => {
    e.preventDefault();
    onClick();
    
  };
  return (
    <button
      className="blackbutton"
      style={{ width: width, height: height }}
      onClick={submitClick}
    >
      {children}
    </button>
  );
};
