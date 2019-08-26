import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { sortByDate } from "../actions/filters";

const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={e => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          } else {
            props.dispatch(sortByAmount());
          }
        }}
      >
        <option value={"date"}> Date </option>
        <option value={"amount"}> Amount </option>
      </select>
    </div>
  );
};
const mapPropsToState = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapPropsToState)(ExpenseListFilters);
