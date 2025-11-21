import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

// ALX requires this exact function name
export async function fetchUserData({ username, location, minRepos }) {
  // Construct query
  let query = "type:user";

  if (username) query += ` ${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    // ✅ Advanced search API endpoint
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query.trim())}`);

    // GitHub search results are inside `items`
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error.response?.data || error);
    return [];
  }
}
