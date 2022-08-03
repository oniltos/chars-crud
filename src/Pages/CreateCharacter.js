import { useState } from "react";
import axios from "axios";

export default function CreateCharacter() {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weapon, setWeapon] = useState("");
  const [debt, setDebt] = useState(false);

  const data = {
    name,
    occupation,
    weapon,
    debt,
  };

  const token = localStorage.getItem('token')

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/characters`, data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1 className="title">Character Creation</h1>
      <form className="char-creation" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          name={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="occupation">Occupation</label>
        <input
          value={occupation}
          name={occupation}
          placeholder="occupation"
          onChange={(e) => setOccupation(e.target.value)}
        />
        <label htmlFor="weapon">Weapon</label>
        <input
          value={weapon}
          name={weapon}
          placeholder="Weapon"
          onChange={(e) => setWeapon(e.target.value)}
        />
        <label htmlFor="debt">Debt</label>
        <input type="checkbox" value={debt} onChange={() => setDebt(!debt)} />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
