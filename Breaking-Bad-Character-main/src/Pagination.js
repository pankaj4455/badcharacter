import { useContext } from "react";
import DataContext from "./DataContext";
import PaginationButton from "./PaginationButton";

const Pagination = () => {
  const {allCharacters} = useContext(DataContext)
  const createPageArray = () => {
    const total = parseInt(allCharacters.length / 10);
    let pageArr = [];
    for(let i = 0; i < total; i++) pageArr.push(i);
    return pageArr;
  }
  const pageNumbers = createPageArray();
  return (
    <div className="pagination">
      {
        pageNumbers.map(page => <PaginationButton key={page} pageNum={page}/>)
      }
    </div>
  );
}

export default Pagination