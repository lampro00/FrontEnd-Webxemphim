import React, { useState } from "react";

import Nav from "../../components/browse/Nav";
import SearchResult from "../../components/search/SearchResult";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [genre, setgenre] = useState("");
  const [mediaType, setmediaType] = useState("");
  const [language, setlanguage] = useState("");
  const [year, setyear] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [genre1, setgenre1] = useState("");
  const [mediaType1, setmediaType1] = useState("");
  const [year1, setyear1] = useState("");
  const [language1, setlanguage1] = useState("");

  const handleSearch = () => {
    setQuery(searchInput);
    setgenre(genre1);
    setmediaType(mediaType1);
    setlanguage(language1);
    setyear(year1);
  };

  const resetSearch = () => {
    setQuery("");
    setSearchInput("");
  };

  return (
    <div className="app">
      <Nav />
      <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
                <label>Tim theo tên phim</label> <br></br>
                <input
                  type="text"
                  placeholder="Theo tên"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />{" "}
                <br></br>
                <label>Tim theo the loai</label> <br></br>
                <input
                  type="text"
                  placeholder="thể loại"
                  onChange={(e) => setgenre1(e.target.value)}
                  value={genre1}
                />{" "}
                <br></br>
                <label>Tim theo thể loại xem </label>
                <br></br>
                <select
                  id="mediaType"
                  name="mediaType"
                  onChange={(e) => {
                    if (!e.target.value) setmediaType1("All");
                    else setmediaType1(e.target.value);
                  }}
                >
                  <option value="All">All</option>
                  <option value="TV">TV</option>
                  <option value="movie">movie</option>
                  <option value="person">person</option>
                </select>
                <br></br>
                {/* <div className="icon-wrap">
                  <svg
                    // className="svg-inline--fa fa-search fa-w-16"
                    fill="#ccc"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </div> */}
                <label>Tim theo ngôn ngữ </label> <br></br>
                <select
                  onChange={(e) => {
                    setlanguage1(e.target.value);
                    if (!e.target.value) setyear1("All");
                  }}
                >
                  <option value="en">en-us</option>
                  <option value="jp">jp</option>
                  <option value="kr">kr</option>
                </select>{" "}
                <br></br>
                <label>Tim theo năm phát hành</label> <br></br>
                <input
                  type="text"
                  placeholder="Theo năm"
                  onChange={(e) => {
                    setyear1(e.target.value);
                  }}
                  value={year1}
                />{" "}
                <br></br>
              </div>
            </div>
            <div className="advance-search">
              <div className="row third">
                <div className="input-field">
                  <div className="result-count"></div>
                  <div className="group-btn">
                    <button
                      className="btn-delete"
                      onClick={resetSearch}
                      type="button"
                    >
                      RESET
                    </button>
                    <button
                      className="btn-search"
                      type="button"
                      onClick={() => handleSearch()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SearchResult
        query={query}
        genre={genre}
        mediaType={mediaType}
        year={year}
        language={language}
      />
    </div>
  );
};

export default Search;
