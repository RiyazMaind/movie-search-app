import React from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`} className="view-details-link">View Details</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;
