
import React, { useState } from 'react';
import { useMovieContext } from './MovieContext';
import axios from 'axios';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const { dispatch } = useMovieContext();

  const searchMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${query}&apikey=d069d7bf`)
      .then((response) => {
        if (response.data.Search) {
          dispatch({ type: 'SEARCH_MOVIES', payload: response.data.Search });
        } else {
          dispatch({ type: 'INVALID_MOVIE' });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>
    </div>
  );
};

export default MovieSearch;

