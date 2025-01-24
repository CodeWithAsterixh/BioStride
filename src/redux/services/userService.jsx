import axios from 'axios';

// base URL for the API
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches a list of users from the server.
 *
 * @returns {Promise<Array>} A promise that resolves to the list of users.
 * @throws {Error} If the request fails, an error is thrown.
 */
export const fetchUsers = async () => {
  try {
    // Make a GET request to the API endpoint to fetch users
    const response = await axios.get(API_URL);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching users:', error);
    
    // Rethrow the error to be handled by the caller
    throw error;
  }
};
