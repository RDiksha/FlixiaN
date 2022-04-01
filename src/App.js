import React from "react";
// import logo from './logo.svg';
import Row from "./Row";
import Banner from "./Banner";
import "./App.css";
import request from "./request";
//import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      <Banner fetchUrl={request.fetchNetflixOriginals} />
      {/*navbar*/}
      <div className="app_row">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
