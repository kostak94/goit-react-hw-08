import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logout, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, () => {
      return initialState;
    });
  },
});

export const authReducer = slice.reducer;
