import React, { useState } from "react";
import { searchUsersAdvanced } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {   // <-- async ✔
    e.preventDefault();
    setLoading(true);

    const users = await searchUsersAdvanced({   // <-- await ✔
      username,
      location,
      minRepos,
    });

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
          className="bg-blue-600 text-white p-2 rounded w-full"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}   {/* <-- "&&" ✔ */}

        {!loading && results.length === 0 && (
          <p className="text-gray-500">No results yet.</p>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-3">
            {results.map((user) => (   // <-- map ✔
              <div
                key={user.id}
                className="p-3 border rounded flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    className="text-blue-500 underline"
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

export default Search;
