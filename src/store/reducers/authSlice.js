import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
<<<<<<< HEAD
  user: null,
=======
  user: null, // Set this to `null` initially
>>>>>>> c66f66da36d15c2ad88ff5d6e9bd0a2adfbb418f
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
