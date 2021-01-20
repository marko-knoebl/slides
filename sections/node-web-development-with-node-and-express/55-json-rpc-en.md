# JSON-RPC

## JSON-RPC

example request body:

```json
{
  "jsonrpc": "2.0",
  "method": "pokemon_by_name",
  "params": { "name": "pikachu" },
  "id": 1234
}
```

example response:

```json
{
  "error": null,
  "result": { "name": "Pikachu", "img": "..." },
  "id": 1234
}
```

## JSON-RPC

exercise: create a JSON-RPC API that supports the queries `pokemon_by_name` and `type_by_id` and queries https://pokeapi.co/api in the background
