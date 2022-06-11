import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CharacterEdit() {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weapon, setWeapon] = useState("");
  const [debt, setDebt] = useState(false);
  const [info, setInfo] = useState({ name, occupation, weapon, debt });

  const data = {
    name,
    occupation,
    weapon,
    debt,
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`https://ih-crud-api.herokuapp.com/characters/${id}`, info)
      .then((response) => alert("Character successfully updated!"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1 className="title">Character Edition Page</h1>
      <form className="char-creation" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={info.name}
          name={info.name}
          placeholder="Name"
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <label htmlFor="occupation">Occupation</label>
        <input
          value={info.occupation}
          name={info.occupation}
          placeholder="occupation"
          onChange={(e) => setInfo({ ...info, occupation: e.target.value })}
        />
        <label htmlFor="weapon">Weapon</label>
        <input
          value={info.weapon}
          name={info.weapon}
          placeholder="Weapon"
          onChange={(e) => setInfo({ ...info, weapon: e.target.value })}
        />
        <label htmlFor="debt">Debt</label>
        <input
          type="checkbox"
          value={info.debt}
          checked={info.debt}
          onChange={() => setInfo({ ...info, debt: !info.debt })}
        />
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}
