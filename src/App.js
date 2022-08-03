import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./Pages/CharacterList";
import CharacterDetails from "./Pages/ChracterDetails";
import CreateCharacter from "./Pages/CreateCharacter";
import CharacterEdit from "./Pages/CharacterEdit";
import SignUp from "./Pages/Auth/SignUp";
import Login from './Pages/Auth/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/new-character" element={<CreateCharacter />} />
        <Route path="/edit-character/:id" element={<CharacterEdit />} />
      </Routes>
    </div>
  );
}

export default App;
