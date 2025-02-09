import { calendarStore, calendarStoreModel } from "./modules/Store/Calendar";
import { expensesStore, expensesStoreModel } from "./modules/Store/Charges";
// import { configureStore } from "@reduxjs/toolkit";
// import expensesReducer from "./modules/Store/Charges";

import { createStore, createTypedHooks } from "easy-peasy";

export interface Store {
  expensesStore: expensesStore;
  calendarStore:calendarStore;
}

const typedHooks = createTypedHooks<Store>();

export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;

export const store = createStore<Store>({
  expensesStore: expensesStoreModel,
  calendarStore:calendarStoreModel,
});
