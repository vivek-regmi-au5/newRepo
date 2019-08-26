import React, { Component } from "react";
import moment from "moment";

// import { SingleDatePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calenderFocused: false,
    error: ""
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please fill in des and amount" });
    } else {
      this.setState({ error: "" });
      this.props.onSubm({
        description: this.state.description,
        amount: this.state.amount,
        note: this.state.note
      });
    }
  };

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  onNoteChange = e => {
    this.setState({ note: e.target.value });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            value={this.state.amount}
            onChange={this.onAmountChange}
            type="number"
            placeholder="Amount"
          />
          {/* <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            id="34567576587vhajsd86787"
            numberOfMonths={1}
            isOutsideRange={() => false}
          /> */}
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note(optional)"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
