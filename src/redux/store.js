import { configureStore } from '@reduxjs/toolkit'; 
import authReducer from './slices/authSlice';     
import userReducer from './slices/userSlice';     
import roleReducer from './slices/roleSlice';     

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    // Map reducers to their respective slices
    auth: authReducer,   // Handles authentication-related state
    users: userReducer,  // Handles user-related state
    roles: roleReducer,  // Handles role-related state
  },
});

export default store;
