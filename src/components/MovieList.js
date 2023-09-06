import React from "react";
import { useMovieContext } from './MovieContext';

const MovieList = () => {
  const { state } = useMovieContext();
  const { movies, error } = state;

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
