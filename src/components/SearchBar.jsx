import React, { useState } from "react";
import axios from "axios";

function SearchBar({ setMovies}) {
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    const API_URL = `https://www.omdbapi.com/?s=${query}&apikey=2035986c`;
    const response = await axios.get(API_URL);
    setMovies(response.data.Search || []);
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
