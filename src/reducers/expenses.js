const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSES":
      return [...state, action.expenses];
    case "DELETE_EXPENSES":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "UPDATE_EXPENSES":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.obj
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
export default expensesReducer;
