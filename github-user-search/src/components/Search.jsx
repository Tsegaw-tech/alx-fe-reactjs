import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const users = await fetchUserData({ username, location, minRepos });
    setResults(users);
    setLoading(false);
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min repos (optional)"
          className="w-full border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* RESULTS */}
      <div className="mt-6">
        {loading && <p>Loading...</p>}

        {!loading && results.length === 0 && username !== "" && (
          <p className="text-center text-red-500">
            Looks like we can't find the user
          </p>
        )}

        {!loading && results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="p-3 border rounded flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    className="text-blue-500 underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
