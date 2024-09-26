import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    email: null,
    username: null,
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
      state.username = "Mohd Hasib";
    },
    logout: (state) => {
      state.loggedIn = false;
      state.username = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
