import { useState, useEffect } from "react";

// Custom hook to simulate authentication status
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate auth check, e.g., from localStorage or API
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  return { isAuthenticated };
};

export default useAuth;
