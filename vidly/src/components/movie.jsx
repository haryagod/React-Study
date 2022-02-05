import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

class Movie extends Component {
  componentDidMount() {}

  saveMovie() {
    this.props.navigate("/movies");
  }

  render() {
    const { movieId } = this.props.params;

    return (
      <React.Fragment>
        <div>Movie -: {movieId}</div>
        <button className="btn btn-primary" onClick={() => this.saveMovie()}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default (props) => (
  <Movie {...props} navigate={useNavigate()} params={useParams()} />
);
