import axios from 'axios';

// Basic endpoint for fetching a single user's details
const BASE_URL = 'https://api.github.com/users';

// Function for basic user data retrieval (unchanged)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Function for advanced search using GitHub Search API
export const fetchUsersAdvanced = async ({ username, location, minRepos }) => {
  try {
    // Build the query string using the provided search criteria.
    // GitHub search API allows qualifiers such as "location:" and "repos:>=<number>".
    let query = username ? username : '';

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Construct the complete endpoint for advanced user search.
    const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;
  }
};
