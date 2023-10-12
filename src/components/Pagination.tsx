import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import { rightArrow, leftArrow } from "../../assets";

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: any) => void;
  paginateFront: () => void;
  paginateBack: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
  paginateFront,
  paginateBack,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const lastNumber = pageNumbers[pageNumbers.length - 1];

  return (
    <div className="flex py-6">
      <nav
        className="mx-auto relative z-0 inline-flex gap-4 "
        aria-label="Pagination"
      >
        <button
          onClick={() => {
              paginateBack(); 
          }}
          disabled={currentPage <= 1}
          // href="#"
          className={`relative inline-flex mr-3 items-center px-4 py-2 border-2 border-gray-500 rounded-md font-semibold text-gray-500 hover:text-[#185BC3] ${
            currentPage <= 1 ? 'opacity-40' : ''
          }`}
          >
              <FaChevronLeft />
          </button>

        <ul className="flex mx-auto gap-3 items-center">
            <li >
              <a
                onClick={() => {
                  paginate(pageNumbers);
                }}
                href="#"
                className="bg-[#185BC3] border-2 border-[#185BC3] rounded-md  font-semibold text-white relative inline-flex items-center px-4 py-2 text-md"
              >
                {currentPage}
              </a>
            </li>
            <li className="text-gray-500 font-semibold">
                of
            </li>

            <li 
                className="text-[#185BC3] border-2 border-[#185BC3] font-semibold rounded-md relative inline-flex items-center px-4 py-2 text-md"
              >
                {lastNumber}
            </li>
        </ul>
        <button
          onClick={() => {
            paginateFront();
          }}
          disabled={currentPage === pageNumbers.length }
          // className="relative cursor-pointer inline-flex mr-3 items-center px-4 py-2 border-2 border-gray-500 rounded-md font-semibold text-gray-500 hover:text-[#185BC3]"
          className={`relative inline-flex mr-3 items-center px-4 py-2 border-2 border-gray-500 rounded-md font-semibold text-gray-500 hover:text-[#185BC3] ${
            currentPage === pageNumbers.length ? 'opacity-40' : ''
          }`}
        >
            <FaChevronRight />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;