import { fetchRoles } from "../services/roleService";
import { fetchRolesFailure, fetchRolesRequest, fetchRolesSuccess } from "../slices/roleSlice";


export const loadRoles = () => async (dispatch) => {
  dispatch(fetchRolesRequest()); // Dispatch the loading action
  try {
    const roles = await fetchRoles(); // Fetch roles from the API
    dispatch(fetchRolesSuccess(roles)); // Dispatch the success action with the fetched roles
  } catch (error) {
    dispatch(fetchRolesFailure(error.message)); // Dispatch the failure action with the error message
  }
};
