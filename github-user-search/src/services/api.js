// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      // If needed, include the API key in headers
      headers: { Authorization: `token ${API_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
