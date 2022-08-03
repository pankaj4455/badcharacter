import React from 'react'
import { useContext } from "react";
import DataContext from "./DataContext";

const PaginationButton = ({pageNum}) => {
     const { page, changePage } = useContext(DataContext);
  return (
    <button
      className={page === Number(pageNum) ? "active-page" : null}
      onClick={(e) => changePage(Number(pageNum))}
    >
      {pageNum + 1}
    </button>
  );
}

export default PaginationButton