import { fetchUsers } from "../services/userService";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../slices/userSlice";


export const loadUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest()); // Dispatch the loading action
  try {
    const users = await fetchUsers(); // Fetch users from the API
    dispatch(fetchUsersSuccess(users)); // Dispatch the success action with the fetched users
  } catch (error) {
    dispatch(fetchUsersFailure(error.message)); // Dispatch the failure action with the error message
  }
};
