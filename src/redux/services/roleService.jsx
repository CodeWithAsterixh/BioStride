import axios from 'axios'; // Import Axios for making HTTP requests

// Define the base URL for the API
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches a list of roles from the server.
 *
 * @returns {Promise<Array>} A promise that resolves to the list of roles.
 * @throws {Error} If the request fails, an error is thrown.
 */
export const fetchRoles = async () => {
  try {
    // Make a GET request to the API endpoint to fetch roles
    const response = await axios.get(API_URL);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching roles:', error);
    
    // Rethrow the error to be handled by the caller
    throw error;
  }
};
