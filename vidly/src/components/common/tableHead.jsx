import React, { Component } from "react";

//columns onSort sortColumn
class TableHead extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order == "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { columns } = this.props;
    return (<thead>
    <tr>
    {columns.map((column, i) => (<th key={column.path || column.key} onClick={() => 
        this.raiseSort(column.path)}>{column.name}</th>))}
  </tr>
  </thead>);
}
}

export default TableHead;
