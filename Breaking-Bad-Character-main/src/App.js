import Header from "./Header";
import CharacterList from "./CharacterList";
import IndividualCharacter from "./IndividualCharacter";
import Pagination from "./Pagination";
import Search from "./Search";
import Loader from "./Loader";
import DataContext from "./DataContext";
import { useContext } from "react";
import "./App.css";

function App() {
  const { loading, currentCharacters, showIndividual } = useContext(DataContext);
  return (
    <>
      <Header />
      <Search />
      {showIndividual ? (
        <IndividualCharacter />
      ) : loading ? (
        <Loader />
      ) : (
        <CharacterList />
      )}
      {currentCharacters.length < 10 ? null : !showIndividual ? <Pagination /> : null}
    </>
  );
}

export default App;
