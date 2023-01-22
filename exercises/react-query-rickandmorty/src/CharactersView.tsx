import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchData } from "./queryFn";

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
  const data = (await res.json()) as Character;
  const character = {
    id: data.id,
    name: data.name,
    origin: {
      name: data.origin.name,
      url: data.origin.url,
    },
  };
  return data;
}

export default function CharactersView() {
  const [id, setId] = useState(1);

  const myQuery = useQuery({
    queryKey: ["characters", id],
    queryFn: () => fetchCharacter(id),
  });

  if (myQuery.isLoading) {
    return <div>loading...</div>;
  } else if (myQuery.isError) {
    return <div>error</div>;
  }
  return (
    <div>
      <h1>Characters</h1>
      <p>{myQuery.data.name}</p>
      <p>{myQuery.data.origin.name}</p>
      <button onClick={() => setId(id - 1)}>previous</button>
      <button onClick={() => setId(id + 1)}>next</button>
    </div>
  );
}
