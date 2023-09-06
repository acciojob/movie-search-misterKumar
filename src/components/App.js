
import React from "react";
import './../styles/App.css';
import { MovieProvider } from './MovieContext';
import MovieSearch from './MovieSearch';
import MovieList from './MovieList';

const App = () => {
  return (
    <div className="App">
    <MovieProvider>
      <MovieSearch />
      <MovieList />
    </MovieProvider>
  </div>
  )
}

export default App
