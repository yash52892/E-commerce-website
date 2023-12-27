import React, { useEffect } from "react";
import { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 
  

  const fetchmoviesHandler= async ()=>{
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }
      const data = await response.json();
      const newMovies = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          releaseDate: item.release_date,
          openingText: item.opening_crawl,
        };
      });
      setMovies(newMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
  useEffect(()=>{
        fetchmoviesHandler();
      },[]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviesHandler}>Fetch Movies</button>
      </section>
      <section className="section">
        {isLoading && !error && <section className="loader"></section>}
        {!error && <MoviesList movies={movies} />}
        {error && <p>{error.message}</p>}
        {/* {isLoading && !error && (
          <button className="button" onClick={()=>{setStop(true)}}>
            Cancel
          </button>
        )} */}
      </section>
    </React.Fragment>
  );
}

export default App;
