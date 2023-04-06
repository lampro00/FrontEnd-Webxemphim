import React, { useState, useEffect } from "react";

import axios from "../../utils/axios";
import requests from "../../utils/requests";

import "./SearchResult.css";

const base_url = "https://image.tmdb.org/t/p/original";

const SearchResult = ({ query, genre, mediaType, year, language }) => {
  const [movies, setMovies] = useState([]);

  const url = `${requests.fetchSearch}&keywork=${query}&genre=${genre}&mediaType=${mediaType}&year=${year}&language=${language}`;
  console.log(url);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);

      console.log(request);
      setMovies(request.data);
      return request;
    }
    if (query) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [url, query]);

  return (
    <div className="row">
      <h2>Search Result</h2>
      <div className="row_posters search-resul-container sc2">
        {movies == "Not found moves" ? (
          <h1>NOT FOUND MOVIE</h1>
        ) : (
          movies.map((movie) => {
            return (
              <img
                key={movie.id}
                className={`row_poster row_posterLarge`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchResult;
