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
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button>

        <img src="/images/previous.png" alt="plus-button" />
        <span>Previous</span>
        
      </button>

      <div className="pagenumbers">
        {pageNumbers.map((number) => (
          <span key={number}>
            <button
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          </span>
        ))}
      </div>

      <button>
        <span>Next</span>
        <img src="/images/next.png" alt="plus-button" />
      </button>
    </div>
  );
};

export default Pagination;
