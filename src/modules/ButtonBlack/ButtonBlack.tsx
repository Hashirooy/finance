import "./ButtonBlack.css";
import { Children, ReactNode } from "react";

interface BlackButtonProps {
  children: ReactNode; // Define the type of 'children'
}

export const BlackButton = ({ children }: BlackButtonProps) => {
  return <button className="blackbutton">{children}</button>;
};
