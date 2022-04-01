import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";
import InfoDialog from "./InfoDialog";
import Navbar from "./Navbar";
//import 'font-awesome/css/font-awesome.min.css';

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const [val, setVal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("mov", request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const truncate = (str, len) => {
    return str?.length > len ? str.substr(0, len - 1) + "..." : str;
  };
  const setMovieInfo = () => {
    setLoading(true);
  };

  //console.log(movie.genre_ids, typeof movie.genre_ids, "clue")

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <Navbar />

      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <h1
          className="banner_description"
          onMouseLeave={() => {
            setVal(false);
          }}
          onMouseEnter={() => {
            setVal(true);
          }}
        >
          {val ? movie.overview : truncate(movie.overview, 150)}
        </h1>
        <div>
          <button className="banner_buttons1">Play</button>
          <button className="banner_buttons2" onClick={setMovieInfo}>
            More Info
          </button>
        </div>
        {loading && <InfoDialog movie={movie} />}
      </div>
    </header>
  );
}

export default Banner;
