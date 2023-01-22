import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type ApiCharacter = {
  id: number;
  name: string;
  origin: {
    name: string;
    url: string;
  };
};

async function fetchCharacterSearch({ name }: { name?: string }) {
  let url = "https://rickandmortyapi.com/api/character/";
  if (name) {
    url += `?name=${name}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`error during fetch: ${url}`);
  }
  const data = await res.json();
  return data.results as Array<ApiCharacter>;
}

export default function CharacterSearchView() {
  const [searchInput, setSearchInput] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState<string | null>(null);

  const searchSuggestionsQuery = useQuery({
    queryKey: ["characterSearchSuggestions", searchInput],
    queryFn: () => fetchCharacterSearch({ name: searchInput }),
    enabled: searchInput.length > 2,
  });

  const searchQuery = useQuery({
    queryKey: ["characterSearch", { name: submittedSearch }],
    enabled: submittedSearch !== null,
    queryFn: () => fetchCharacterSearch({ name: submittedSearch as string }),
  });

  let main = null;
  if (!submittedSearch) {
    main = <div>Press Enter to search</div>;
  } else if (searchQuery.isSuccess) {
    main = (
      <div>
        {searchQuery.data.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
    );
  } else if (searchQuery.isError) {
    main = <div>Error</div>;
  }

  let dataList = null;
  if (searchSuggestionsQuery.isSuccess) {
    dataList = (
      <datalist id="mydatalist">
        {searchSuggestionsQuery.data.map((character) => (
          <option
            key={character.id}
            value={character.name}
            label={character.name}
            data-id={character.id}
          />
        ))}
      </datalist>
    );
  }

  // if (searchInput === "") {
  //   main = <div>type to search</div>;
  // } else if (searchQuery.isError) {
  //   main = <div>error</div>;
  // } else if (searchQuery.isLoading && submittedSearch.length > 0) {
  //   main = <div>loading</div>;
  // } else {
  //   main = (
  //     <div>
  //       {searchQuery.data.map((character) => (
  //         <div key={character.id}>{character.name}</div>
  //       ))}
  //       {/* {searchSuggestionsQuery.isSuccess ? (
  //         <datalist id="mydatalist">
  //           {searchSuggestionsQuery.data.map((character) => (
  //             <option
  //               key={character.id}
  //               value={character.name}
  //               label={character.name}
  //               data-id={character.id}
  //             />
  //           ))}
  //         </datalist>
  //       ) : null} */}
  //     </div>
  //   );
  // }

  return (
    <div>
      <h3>character search</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmittedSearch(searchInput);
        }}
      >
        <input
          list="mydatalist"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Search</button>
        {dataList}
      </form>
      {main}
    </div>
  );
}
