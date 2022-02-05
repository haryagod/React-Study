import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  render() {
    const { moviesItr, sortColumn, onSort } = this.props;
    const columns = [
      {
        name: "title",
        path: "title",
        content: (row) => <Link to={`/movies/${row._id}`}>{row.title}</Link>,
      },
      { name: "Genre", path: "genre.name", property: "name" },
      { name: "Stock", path: "numberInStock" },
      { name: "Rate", path: "dailyRentalRate" },
      {
        name: "",
        path: null,
        key: "like",
        content: (row) => (
          <Like movieId={row._id} like={row.like} onLike={this.props.onLike} />
        ),
      },
      {
        name: "",
        path: null,
        key: "delete",
        content: (row) => (
          <button
            onClick={() => this.props.onDelete(row._id)}
            className="btn btn-danger sm m-2"
          >
            Delete
          </button>
        ),
      },
    ];
    if (moviesItr.length === 0)
      return <p>There are No Movies For selected Genre</p>;
    return (
      <Table
        data={moviesItr}
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
