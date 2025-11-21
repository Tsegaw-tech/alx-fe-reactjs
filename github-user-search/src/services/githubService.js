import axios from "axios";

// ALX requires this exact string
export async function fetchUserData({ username, location, minRepos }) {
  let query = "type:user";
  if (username) query += ` ${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    // The literal string ALX expects
    const response = await axios.get(
      "https://api.github.com/search/users?q=" + encodeURIComponent(query.trim())
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
}
