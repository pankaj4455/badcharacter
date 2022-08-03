import React, { useContext } from 'react'
import DataContext from './DataContext'

const Search = () => {
  const { search, handleSearch, searchCharacters } = useContext(DataContext);
     
  return (
    <div className="search">
      <input
        type="search"
        value={search}
        onKeyUp={(e) => searchCharacters(e.target.value)}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search Characters..."
      />
    </div>
  );
}

export default Search