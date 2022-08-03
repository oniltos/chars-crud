import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import apiService from "../services/api.service";

import CharacterCard from "../Components/CharacterCard";
import Loading from "../Components/Loading";

export default function CharacterList() {
  const [characters, setCharacters] = useState();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const characters = await apiService.listCharacters()
      setCharacters(characters)
    }

    fetchData()
  }, [refresh]); 

  function deleteChar(id) {
    axios
      .delete(`http://${process.env.REACT_APP_API_URL}/characters/${id}`)
      .then(() => setRefresh(!refresh))
      .catch((e) => console.log(e));
  }
  if (!characters) {
    return <Loading />;
  }
  return (
    <div className="characters">
      <div className="char-header">
        <div></div>
        <h1>Character List</h1>
        <Link to={"/new-character"}>
          <p>New Character</p>
        </Link>
      </div>
      {characters.map((char) => {
        return (
          <div className="char-list">
            <CharacterCard
              key={char.id}
              name={char.name}
              weapon={char.weapon}
            />
            <Link to={`/${char.id}`}>
              <FaInfoCircle />
            </Link>
            <Link to={`/edit-character/${char.id}`}>
              <FaUserEdit />
            </Link>
            <FaRegTrashAlt onClick={() => deleteChar(char.id)} />
          </div>
        );
      })}
    </div>
  );
}
