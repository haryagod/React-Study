import React, { Component } from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { dataCount, pageSize, currentPage, handlePagination } = props;

  let pages = dataCount / pageSize;
  pages = Math.ceil(pages);
  const pageArray = _.range(1, pages + 1);

  if (pages <= 1) {
    return null;
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageArray.map((page) =>
          page == currentPage ? (
            <li key={page} className="page-item active">
              <a className="page-link " onClick={() => handlePagination(page)}>
                {page}
              </a>
            </li>
          ) : (
            <li key={page} className="page-item">
              <a className="page-link" onClick={() => handlePagination(page)}>
                {page}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
