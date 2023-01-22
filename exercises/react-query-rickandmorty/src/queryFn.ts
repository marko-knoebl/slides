type ApiCharacter = {
  id: number;
  name: string;
  origin: {
    name: string;
    url: string;
  };
};

type a = Parameters<typeof fetch>;

async function fetchJson(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const res = await fetch(input, init);
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  const data = await res.json();
  return data;
}

type CharacterQuery = ["character", number];
type CharacterSearchQuery = ["characterSearch", { name?: string }];

export async function fetchData(query: CharacterQuery | CharacterSearchQuery) {
  if (query[0] === "character") {
    let url = `https://rickandmortyapi.com/api/character/${query[1]}`;
    const data = await fetchJson(url);
    return data as ApiCharacter;
  } else if (query[0] === "characterSearch") {
    let url = "https://rickandmortyapi.com/api/character/";
    const name = query[1].name;
    if (name) {
      url += `?name=${name}`;
    }
    const data = await fetchJson(url);
    return data.results as Array<ApiCharacter>;
  }
}

export async function fetchCharacterSearch({ name }: { name?: string }) {
  let url = "https://rickandmortyapi.com/api/character/";
  if (name) {
    url += `?name=${name}`;
  }
  const data = await fetchJson(url);
  return data.results as Array<ApiCharacter>;
}
