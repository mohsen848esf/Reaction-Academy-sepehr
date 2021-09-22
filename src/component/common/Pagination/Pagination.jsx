import React from "react";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import paginationCss from "./Pagination.module.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange, onPageExchange } =
    props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="row Page navigation mt-4">
      <ul className={`pagination flex-row-reverse justify-content-center mt-4`}>
        <li className={`page-item ${currentPage === 1 ? `disabled ${paginationCss.dontTouch}` : null}`}>
          <NavLink
            name="Previous"
            onClick={(e) => onPageExchange(e)}
            className={`page-link ${paginationCss.pageColor}`}
            to="#"
            aria-label="Previous"
            aria-hidden="false">
            قبلی
          </NavLink>
        </li>
        {pages.map((page) => (
          <li
            className={`page-item ${page === currentPage && "active"}`}
            key={page}>
            <NavLink
              className={`page-link ${paginationCss.pageColor}`}
              to="#"
              onClick={() => onPageChange(page)}>
              {page}
            </NavLink>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pages.length ? `disabled ${paginationCss.dontTouch}` : null
          }`}>
          <NavLink
            name="Next"
            onClick={(e) => onPageExchange(e)}
            className={`page-link ${paginationCss.pageColor}`}
            to="#"
            aria-label="Next"
            aria-hidden="false">
            بعدی
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
