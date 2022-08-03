import { createContext, useState, useEffect } from "react";
import FetchData from "./FetchData";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [showIndividual, setShowIndividual] = useState(false);
  const [singleChar, setSingleChar] = useState({});
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const searchCharacters = (str) => {
    if (str !== "") {
      const temp = allCharacters.filter(
        (ch) =>
          ch.name.toLowerCase().includes(str.toLowerCase()) ||
          ch.nickname.toLowerCase().includes(str.toLowerCase()) ||
          ch.portrayed.toLowerCase().includes(str.toLowerCase())
      );
      setCurrentCharacters(temp);
      if (temp.length === 0){
        setError("Oops! character not found");
      }
      else if (temp.length > 9) renderCurrentCharacters(0, temp);
    } else {
      renderCurrentCharacters(page);
      setError("");
    }
  };


  const renderIndividualCharacter = (show, data = {}) => {
    setSingleChar(data);
    setShowIndividual(show);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const renderCurrentCharacters = (pageNumber, data = allCharacters) => {
    const pageNum = pageNumber * 10;
    const limit = pageNum + 10;
    const newCharacters = [];
    for (let i = pageNum; i < limit; i++) {
      newCharacters.push(data[i]);
    }
    setCurrentCharacters(newCharacters);
  };

  const changePage = (pageNumber) => {
    renderCurrentCharacters(pageNumber, allCharacters);
    setPage(pageNumber);
    setSearch("");
  };

  useEffect(() => {
    async function getCharacters() {
      setLoading(true);
      const data = await FetchData();
      renderCurrentCharacters(0, data);
      setAllCharacters(data);
      setLoading(false);
    }
    getCharacters();
  }, []);

  return (
    <DataContext.Provider
      value={{
        allCharacters,
        loading,
        currentCharacters,
        renderIndividualCharacter,
        error,
        page,
        changePage,
        search,
        handleSearch,
        searchCharacters,
        singleChar,
        showIndividual,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
