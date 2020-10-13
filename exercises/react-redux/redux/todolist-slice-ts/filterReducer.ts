import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Filter = "showAll" | "showCompleted" | "showActive";

const filterSlice = createSlice({
  name: "filter",
  initialState: "showAll" as Filter,
  reducers: {
    setFilter(state, action: PayloadAction<Filter>) {
      return action.payload;
    }
  }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
