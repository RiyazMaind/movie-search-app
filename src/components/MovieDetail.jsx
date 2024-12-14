import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css"

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_URL = `https://www.omdbapi.com/?i=${id}&apikey=2035986c`;
      const response = await axios.get(API_URL);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
    </div>
  );
}

export default MovieDetail;
