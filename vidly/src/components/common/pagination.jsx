import React from "react";
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
          page === currentPage ? (
            <li key={page} className="page-item active">
              <button
                className="page-link "
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={page} className="page-item">
              <button
                className="page-link"
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
