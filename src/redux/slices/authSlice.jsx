import { createSlice } from '@reduxjs/toolkit'; // Import the createSlice utility from Redux Toolkit

// Define the initial state of the authentication slice
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
  isLoading: false, // loading state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    authFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginRequest, loginSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;

