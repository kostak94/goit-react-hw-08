import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
