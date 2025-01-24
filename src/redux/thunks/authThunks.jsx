import { login } from "../services/authService";
import { authFailure, loginSuccess, logout } from "../slices/authSlice";

// Thunks
export const loginThunk = (credentials) => async (dispatch) => {
  dispatch(loginRequest()); // Dispatch loading state
  try {
    const data = await login(credentials); // Call the login API
    dispatch(loginSuccess(data)); // Update state on success
  } catch (error) {
    dispatch(authFailure(error.message)); // Handle errors
  }
};

export const logoutThunk = () => async (dispatch) => {
  try {
    // Assuming logout function returns a promise
    await logout(); 
    dispatch(logout());
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};
