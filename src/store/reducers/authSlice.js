import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null, // Set this to `null` initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Save user data
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; // Clear user data on logout
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
