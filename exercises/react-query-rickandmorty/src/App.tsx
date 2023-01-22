import "./App.css";
import HomeView from "./HomeView";
import CharactersView from "./CharactersView";
import { NavLink, Route, Routes } from "react-router-dom";
import CharacterSearchView from "./CharacterSearchView";

type Character = {
  id: number;
  name: string;
  origin: {
    name: string;
    url: string;
  };
};

async function fetchCharacter(id: number): Promise<Character> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) {
    throw new Error("could not fetch asset");
  }
  const data = await res.json();
  const character = {
    id: data.id,
    name: data.name,
    origin: {
      name: data.origin.name,
      url: data.origin.url,
    },
  };
  return character;
}

type Place = {
  id: number;
  name: string;
  residents: Array<Character>;
};

async function fetchPlace(id: number): Promise<Place> {
  const res = await fetch(`https://rickandmortyapi.com/api/place/${id}`);
  if (!res.ok) {
    throw new Error("could not fetch asset");
  }
  const data = await res.json();
  const place = {
    id: data.id,
    name: data.name,
    residents: data.residents,
  };
  return place;
}

function fetchAsset(assetType: string, id: number): Promise<Place | Character> {
  if (assetType === "characters") {
    return fetchCharacter(id);
  } else if (assetType === "places") {
    return fetchPlace(id);
  } else {
    throw new Error();
  }
}

function App() {
  return (
    <div>
      <h1>Character (with search)</h1>
      <NavLink to="/">home</NavLink> |{" "}
      <NavLink to="/characters">characters</NavLink> |{" "}
      <NavLink to="/character-search">character search</NavLink> |{" "}
      <NavLink to="/about">about</NavLink>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/characters" element={<CharactersView />} />
        <Route path="/character-search" element={<CharacterSearchView />} />
      </Routes>
    </div>
  );
}

export default App;
