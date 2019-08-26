import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpenses } from "../actions/expenses";

const AddExpensePage = props => {
  return (
    <div>
      ADD EXPENSE
      <ExpenseForm
        onSubm={expense => {
          props.dispatch(addExpenses(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
