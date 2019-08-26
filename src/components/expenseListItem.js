import React from "react";
import { connect } from "react-redux";
import { deleteExpenses } from "../actions/expenses";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt} - <Link to={`/edit/${id}`}>Edit</Link>
        <button onClick={() => dispatch(deleteExpenses({ id }))}>Remove</button>
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
