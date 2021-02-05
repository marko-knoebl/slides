import dotenv from "dotenv";
import express from "express";
import expressReactViews from "express-react-views";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.engine("jsx", expressReactViews.createEngine());
app.set("view engine", "jsx");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/validation", (req, res) => {
  res.render("validation", { gtin: req.query.gtin });
});

app.listen(PORT);
