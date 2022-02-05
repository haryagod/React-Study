import React, { Component } from "react";
import Movies from "./components/movies";
import Movie from "./components/movie";
import Navbar from "./components/common/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import Login from "./components/login";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/" element={<Navigate replace to="/movies" />} />
        </Routes>
      </React.Fragment>
    );
  }
}
export default App;
