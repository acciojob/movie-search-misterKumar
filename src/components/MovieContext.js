import React from "react";
import { createContext, useReducer, useContext } from 'react'; 

const MovieContext = createContext();

const initialState = {
  movies: [],
  error: null,
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return { ...state, movies: action.payload, error: null };
    case 'INVALID_MOVIE':
      return { ...state, movies: [], error: 'Invalid movie name. Please try again.' };
    default:
      return state;
  }
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export { MovieProvider, useMovieContext };
