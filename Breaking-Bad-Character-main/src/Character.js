import { useContext } from "react";
import DataContext from "./DataContext";


const Character = ({ data }) => {
    const {renderIndividualCharacter} = useContext(DataContext);
     const {name, portrayed, nickname, birthday, status, img} = data;
     const style={
          backgroundImage:`url(${img})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%'
     }
  return (
    <div className="character-container" onClick={() => renderIndividualCharacter(true, data)}>
      <div className="card">
        <div className="card-front" style={style}>
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <p>Actor name : {portrayed}</p>
          <p>Nick name: {nickname}</p>
          <p>Birthday: {birthday}</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
