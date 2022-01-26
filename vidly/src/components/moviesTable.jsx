import React, { Component } from "react";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHead from "./common/tableHead";

class MoviesTable extends Component {
  render() {
    const { moviesItr, onLike, handleDelete, sortColumn, onSort } =
      this.props;
    const columns = [
      { name: "title", path: "title" },
      { name: "Genre", path: "genre.name",property:'name' },
      { name: "Stock", path: "numberInStock" },
      { name: "Rate", path: "dailyRentalRate" },
      { name: "", path: null,key :'like' },
      { name: "", path: null,key:'delete' },
    ];
    if (moviesItr.length === 0) <p>There are No Movies For selected Genre</p>;
    return (
      <React.Fragment>
        <table className="table sm  m-2 border border-primary">
              <TableHead
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
              />
              <TableBody items ={moviesItr} onLike ={onLike} onDelete={handleDelete} properties ={columns}/>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
