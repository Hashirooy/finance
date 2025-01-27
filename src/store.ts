import { expensesStore, expensesStoreModel } from "./modules/Store/Charges";
// import { configureStore } from "@reduxjs/toolkit";
// import expensesReducer from "./modules/Store/Charges";

import { createStore, createTypedHooks } from "easy-peasy";

// export const store = configureStore({
//   reducer: {
//     expenses: expensesReducer, // Подключаем редьюсер для расходов
//   },
// });

// // Типизация RootState для использования в селекторах
// export type RootState = ReturnType<typeof store.getState>;

// // Типизация AppDispatch для использования с useDispatch
// export type AppDispatch = typeof store.dispatch;
export interface Store {
  expensesStore: expensesStore;
}

const typedHooks = createTypedHooks<Store>();

export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;

export const store = createStore<Store>({
  expensesStore: expensesStoreModel,
});
