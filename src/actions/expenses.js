import uuid from "uuid";
export const addExpenses = ({
  description = "",
  amount = 0,
  notes = "",
  createdAt = "date"
} = {}) => {
  return {
    type: "ADD_EXPENSES",
    expenses: {
      id: uuid(),
      description,
      amount,
      notes,
      createdAt
    }
  };
};

export const deleteExpenses = ({ id } = {}) => {
  return {
    type: "DELETE_EXPENSES",
    id
  };
};

export const updateExpenses = (id, obj) => {
  return {
    type: "UPDATE_EXPENSES",
    id,
    obj
  };
};
