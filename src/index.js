import React from "react";
import ReactDOM from "react-dom";
import Redux from "./playground/redux-101";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import { addExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
const store = configureStore();

store.dispatch(
  addExpenses({ description: "water bill", amount: 4500, createdAt: 102939 })
);
store.dispatch(
  addExpenses({ description: "gas", amount: 500, createdAt: 10234 })
);
store.dispatch(
  addExpenses({ description: "home rent", amount: 7500, createdAt: 2939 })
);
store.dispatch(
  addExpenses({ description: "mankho", amount: 3000, createdAt: 42939 })
);
store.dispatch(
  addExpenses({ description: "rice", amount: 2000, createdAt: 939 })
);

// store.dispatch(setTextFilter("rent"));

const state = store.getState();
console.log(state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const Jsx = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Jsx />, document.getElementById("root"));

serviceWorker.unregister();
