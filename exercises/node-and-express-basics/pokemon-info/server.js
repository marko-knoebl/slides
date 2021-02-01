import express from "express";
import expressReactViews from "express-react-views";
import fetch from "node-fetch";

const app = express();

app.engine("jsx", expressReactViews.createEngine());
app.set("view engine", "jsx");

app.get("/", (req, res) => {
  res.redirect("/1");
});
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const dataRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await dataRes.json();
  await res.render("pokemon", { id: id, data: data });
});

app.listen(3000);
