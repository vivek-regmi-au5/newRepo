import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};

// store = {
//   expense: {
//       "addAction"
//   },
//   filter: {
//       "filter"
//   },
//   dispatch: (addExpenses({ description: "gas", amount: 500, createdAt: 10234 })) => {

//   }
// }
// addExpense = () => {
//   type: "addAction"
// }
