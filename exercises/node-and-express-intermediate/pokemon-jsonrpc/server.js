import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/plain" });
  res.send("JSON-RPC API at /api");
});
app.post("/api", async (req, res) => {
  if (req.body.method === "pokemon_by_name") {
    const name = req.body.params.name;
    const pokemonReq = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await pokemonReq.json();
    res.json({
      error: null,
      result: pokemon,
      id: req.body.id,
    });
  } else if (req.body.method === "type_by_id") {
    const typeId = req.body.params.id;
    const typeReq = await fetch("https://pokeapi.co/api/v2/type/" + typeId);
    const type = await typeReq.json();
    res.json({
      error: null,
      result: type,
      id: req.body.id,
    });
  }
});

app.listen(3000);
