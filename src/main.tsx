import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

import { store } from "./store";

import { StoreProvider } from "easy-peasy";

createRoot(document.getElementById("root")!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
