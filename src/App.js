import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./Pages/CharacterList";
import CharacterDetails from "./Pages/ChracterDetails";
import CreateCharacter from "./Pages/CreateCharacter";
import CharacterEdit from "./Pages/CharacterEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/new-character" element={<CreateCharacter />} />
        <Route path="/edit-character/:id" element={<CharacterEdit />} />
      </Routes>
    </div>
  );
}

export default App;
