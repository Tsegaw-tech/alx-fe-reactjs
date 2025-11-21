import { useState } from "react";
import Search from "../components/Search";
import { searchUsersAdvanced } from "../services/githubService";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSearch = async (filters) => {
    const users = await searchUsersAdvanced(filters);
    setResults(users);
  };

  return (
    <div className="p-6">
      <Search onSearch={handleSearch} />

      <div className="mt-8 max-w-4xl mx-auto">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow p-4 rounded-xl flex items-center space-x-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    className="text-blue-600 underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No results yet.</p>
        )}
      </div>
    </div>
  );
}
