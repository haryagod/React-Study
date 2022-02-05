import TableBody from "./tableBody";
import TableHead from "./tableHead";
import React from "react";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <React.Fragment>
      <table className="table sm  m-2 border border-primary">
        <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody items={data} properties={columns} />
      </table>
    </React.Fragment>
  );
};

export default Table;
