import React from "react";
import "./Pagination.css";

interface PaginationProps {
  todosPerPage: number;
  totalTodos: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  todosPerPage,
  totalTodos,
  paginate,
  currentPage,
}) => {
  const pageNumbers:number[] = [];
  const maxPagesToShow = 3; // Maximum number of pages to show before and after ellipsis

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    if (pageNumbers.length <= maxPagesToShow * 2 + 1) {
      // If there are fewer pages than the maximum to show, display all pages
      return pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ));
    } else {
      // Display the first three pages, ellipsis, last three pages
      const startPages = pageNumbers.slice(0, maxPagesToShow);
      const endPages = pageNumbers.slice(-maxPagesToShow);

      return (
        <>
          {startPages.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <span className="ellipsis">...</span>
          {endPages.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </>
      );
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/images/previous.png" alt="plus-button" />
        <span>Previous</span>
      </button>

      <div className="pagenumbers">{renderPageNumbers()}</div>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalTodos / todosPerPage)}
      >
        <span>Next</span>
        <img src="/images/next.png" alt="plus-button" />
      </button>
    </div>
  );
};

export default Pagination;
