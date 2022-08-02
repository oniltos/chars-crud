import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Loading from "../Components/Loading";
import Char from "../Components/Char";

export default function CharacterDetails() {
  const [character, setCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://${process.env.REACT_APP_API_URL}/characters/${id}`)
      .then((response) => setCharacter(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(character);

  if (!character) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="char">Character Details</h1>
      <Char
        name={character.name}
        occupation={character.occupation}
        weapon={character.weapon}
        debt={character.debt}
      />
    </div>
  );
}
