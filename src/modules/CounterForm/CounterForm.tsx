import { useState } from "react";
import { BlackButton } from "../ButtonBlack/ButtonBlack";
import { useStoreActions } from "../../store";
import "./CounterForm.css";

interface credential {
  date: string;
  amount: number;
}

export const CounterForm = () => {
  const [credential, setCredential] = useState<credential>({
    date: "",
    amount: 0,
  });
  const addExpenses = useStoreActions(
    (state) => state.expensesStore.addExpenses
  );

  const onChange = (values: Partial<credential>) => {
    setCredential((prev) => ({ ...prev, ...values }));
  };

  const onClick = () => {
    if (credential.amount == 0 || credential.date == "") {
      alert("ошибка");
    } else {
      addExpenses(credential);
    }
  };

  return (
    <div className="counter-form">
      <form className="counter-form__fields">
        <h3>Дата</h3>
        <input
          className="counter-form__input"
          type="date"
          onChange={(e) => {
            onChange({ date: e.target.value });
          }}
        />
        <h3>Сумма</h3>
        <input
          className="counter-form__input"
          type="text"
          onChange={(e) => {
            onChange({ amount: Number(e.target.value) });
          }}
        />
        <div className="counter-form__button">
          <BlackButton width="60%" height="48px" onClick={onClick}>
            Добавить
          </BlackButton>
        </div>
      </form>
    </div>
  );
};
