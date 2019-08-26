export const setTextFilter = text => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};
export const setStartDate = (time = 0) => {
  return {
    type: "SET_START_DATE",
    time
  };
};

export const setEndDate = time => {
  return {
    type: "SET_END_DATE",
    time
  };
};

export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
  };
};

export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
    sortBy: "date"
  };
};

export const sortByText = (text = "") => {
  return {
    type: "SORT_BY_TEXT",
    text
  };
};
