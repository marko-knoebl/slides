import { PayloadAction } from "@reduxjs/toolkit";

type Filter = "showAll" | "showCompleted" | "showActive";

const filterReducer = (
  state: Filter = "showAll",
  action: PayloadAction<Filter, "filter/setFilter">
) => {
  if (action.type === "filter/setFilter") {
    return action.payload;
  }
  return state;
};

export default filterReducer;
