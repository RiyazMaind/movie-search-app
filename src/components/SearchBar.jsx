import React, { useState } from "react";
import axios from "axios";

function SearchBar({ setMovies }) {
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    const trimmedQuery = query.trim(); // Remove leading/trailing spaces
    if (!trimmedQuery) {
      // If the query is empty after trimming, prevent the search
      setMovies([]);
      return;
    }
    try {
      const API_URL = `https://www.omdbapi.com/?s=${trimmedQuery}&apikey=2035986c`;
      const response = await axios.get(API_URL);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Handle errors gracefully by clearing results
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={searchMovies}>Search</button>
    </div>
  );
}

export default SearchBar;
