import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ ALX expects this exact function name
export async function fetchUserData({ username, location, minRepos }) {
  let query = "type:user ";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`
    );

    // GitHub Search API returns results inside `items`
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error.response?.data || error);
    return [];
  }
}
