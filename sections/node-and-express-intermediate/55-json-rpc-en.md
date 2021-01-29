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

## Libraries

- [jayson](https://www.npmjs.com/package/jayson)
- [json-rpc2](https://github.com/pocesar/node-jsonrpc2)
- [rpc-client-js](https://www.npmjs.com/package/rpc-client-js)

## JSON-RPC

exercise: create a JSON-RPC API that is connected to a database (e.g. _MongoDB_) and that manages a set of todos; use _jayson_ as a library for this task

for solutions, see https://github.com/marko-knoebl/slides/tree/master/exercises/node-and-express-intermediate
