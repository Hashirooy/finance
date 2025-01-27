import { Counter } from "../Counter/Counter";
import { Header } from "../Header/Header";
import "./Main.css";
export const Main = () => {
  return (
    <div className="main">
      <Header></Header>
      <Counter />
    </div>
  );
};
