import axios from "axios";

// ✅ GitHub Search API endpoint
const BASE_URL = "https://api.github.com/search/users";

// ALX requires this exact function name
export async function fetchUserData({ username, location, minRepos }) {
  let query = "type:user";

  if (username) query += ` ${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    // ✅ Advanced API integration
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query.trim())}`);

    // GitHub search results are in items
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error.response?.data || error);
    return [];
  }
}
