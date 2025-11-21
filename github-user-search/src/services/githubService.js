export const searchUsersAdvanced = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(
      query
    )}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.items || [];
  } catch (err) {
    console.error("GitHub Search Error:", err);
    return [];
  }
};
