import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function Home() {
    const [movies, setMovies] = useState([]);
  
    return (
      <div>
        <h1>Movie Search App</h1>
        <SearchBar setMovies={setMovies}/>
        <MovieList movies={movies} />
        
      </div>
    );
  }
  
  export default Home;
  