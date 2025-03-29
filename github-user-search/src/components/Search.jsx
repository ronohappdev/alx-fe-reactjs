import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import axios from "axios";

const AdvancedSearch = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const perPage = 30; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    setPage(1);

    try {
      // Fetch page 1 results using advanced search parameters
      const data = await fetchUsersAdvanced({ username, location, minRepos, page: 1 });
      setResults(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await fetchUsersAdvanced({ username, location, minRepos, page: nextPage });
      setResults(prev => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  // Determine if more results are available based on the total_count
  const hasMore = results.length < totalCount;

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-6">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="minRepos" className="block text-gray-700 font-bold mb-2">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            placeholder="Enter minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Display Loading, Error, or Results */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results.length > 0 && (
        <div>
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="border p-4 rounded flex items-center space-x-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h2 className="text-xl font-bold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Profile
                  </a>
                  {/* Additional details such as location or repository count would require individual user data calls */}
                </div>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={loadMore}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
