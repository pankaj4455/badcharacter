import { useContext } from "react";
import Character from "./Character";
import DataContext from "./DataContext";
const CharacterList = () => {
  const {currentCharacters, error} = useContext(DataContext);

  return (
    <div className="character-list-container">
      {currentCharacters.length === 0 ? <h2>{error}</h2> :
        currentCharacters.map( character => (
          <Character key={character.char_id} data={character} />
        ))}
    </div>
  );
};

export default CharacterList;
