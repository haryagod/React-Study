import React, { Component } from "react";

//columns onSort sortColumn
class TableHead extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const sortColumn = { ...this.props.sortColumn };
    if (column.path !== sortColumn.path) return;
    return sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc"></i>
    ) : (
      <i className="fa fa-sort-desc"></i>
    );
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.name} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
