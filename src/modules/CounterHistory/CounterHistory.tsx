import "./CounterHistory.css";

import { useStoreState } from "../../store";

export const CounterHistory = () => {
  const expenses = useStoreState((state) => state.expensesStore.expenseHistory);

  return (
    <div className="counter-history">
      <div className="counter-history-container">
        {expenses.map((element, index) => (
          <div className="counter-history_element" key={index}>
            <p>Дата: {element.date}</p>
            <p>Сумма:{element.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
