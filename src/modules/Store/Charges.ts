import { action, Action } from "easy-peasy";

export interface expenses {
  date: string;
  amount: number;
}

export interface expensesStore {
  name: string;
  expenses: expenses[];
  addExpenses: Action<expensesStore, expenses>;
}

export const expensesStoreModel: expensesStore = {
  name: "expenses",
  expenses: [],
  addExpenses: action((state, expense) => {
    state.expenses.push(expense);
  }),
};
