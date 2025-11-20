import axios from "axios";
import.meta.env.VITE_APP_GITHUB_API_KEY


const BASE_URL = "https://api.github.com/users/";

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    return null;
  }
};
