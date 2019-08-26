import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpensifyDashBoard = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpensifyDashBoard;
