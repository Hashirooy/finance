import { action, Action } from "easy-peasy";

export interface expense {
  date: string;
  amount: number;
}
export interface expenses {
  [key: number]: expense[];
}

export interface expensesStore {
  name: string;
  expenseHistory: expense[];
  expenses: { [key: number]: expense[] };
  addExpenses: Action<expensesStore, expense>;
}

export const expensesStoreModel: expensesStore = {
  name: "expenses",
  expenses: {},
  expenseHistory: [],
  addExpenses: action((state, expense) => {
    const date = new Date(expense.date);
    const month = date.getMonth() + 1;
    if (!state.expenses[month]) {
      state.expenses[month] = [];
    }

    const existingExpense = state.expenses[month].find(
      (element) => element.date === expense.date
    );
    if (existingExpense) {
      // Если запись с такой датой уже есть, обновляем сумму
      existingExpense.amount += expense.amount;
    } else {
      // Если записи с такой датой нет, добавляем новую
      state.expenses[month].push(expense);
    }
    state.expenseHistory.push(expense);
  }),
};
