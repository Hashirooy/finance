import { CounterForm } from "../CounterForm/CounterForm";
import { CounterGraph } from "../CounterGraph/CounterGraph";
import { CounterHistory } from "../CounterHistory/CounterHistory";

import "./Counter.css";

export const Counter = () => {
  return (
    <div className="counter">
      <CounterGraph />
      <div className="counter-instruments">
        <CounterForm />
        <CounterHistory />
      </div>
    </div>
  );
};
