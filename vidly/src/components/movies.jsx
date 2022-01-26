import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { filterListGroup } from "../util/filterListGroup";
import _ from "lodash";
import { paginate } from "../util/paginate";
import Like from "./common/like";
import { ListGroup } from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    items: [],
    currentItem: "AllGenre",
    sortColumn: { path: "title", order: "ASC" },
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      items: [{ _id: "AllGenre", name: "All Genre" }, ...getGenres()],
    });
    this.handlePagination(1);
  }

 //handlers 
  handleDelete = (rowId) => {
    const { currentPage, pageSize } = this.state;
    const movies = this.state.movies.filter((e) => e._id != rowId);
    const checkItems = paginate(movies, currentPage, pageSize);
    if (checkItems == 0) this.setState({ currentPage: currentPage - 1 });

    this.setState({ movies });
  };
  handleLike = (movieId) => {
     
    const movies = [...this.state.movies];
    const index = movies.findIndex((e) => e._id == movieId);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
  handlePagination = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemClick = (item) => {
    this.setState({ currentItem: item._id, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

 //handlers End

  renderData() {
    const { currentPage, movies, pageSize, currentItem, sortColumn } =
      this.state;
    let moviesItr = [...movies];
    moviesItr = filterListGroup(moviesItr, currentItem);
    const { length: count } = moviesItr;
    moviesItr = _.orderBy(moviesItr, [sortColumn.path], [sortColumn.order]);
    moviesItr = paginate(moviesItr, currentPage, pageSize);
    if (movies.length === 0) return <p>There Are No Movies</p>;
    return (
      <React.Fragment>
        <p>Showing {count} Movies in the DataBase</p>
        <div className="d-flex justify-content-center flex-row">
          <div className="d-flex flex-column m-2">
            <ListGroup
              items={this.state.items}
              currentItem={this.state.currentItem}
              itemClicked={this.handleItemClick}
            />
          </div>
          <div className="d-flex flex-column m-2">
            <MoviesTable
              moviesItr={moviesItr}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center flex-row">

        <Pagination 
              dataCount={count}
              currentPage={currentPage}
              handlePagination={this.handlePagination}
              pageSize={pageSize}
            />
        </div>
      </React.Fragment>
    );
  }
  render() {
    return this.renderData();
  }
}
export default Movies;
