import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "",
};

const slice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
