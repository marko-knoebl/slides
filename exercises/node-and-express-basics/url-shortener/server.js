import dotenv from "dotenv";
import express from "express";
import expressReactViews from "express-react-views";
import isUrl from "is-url";
import mongodb from "mongodb";

const main = async () => {
  dotenv.config();

  const DB_URL = process.env.DB_URL;
  const HOST = process.env.HOST;
  const PORT = process.env.PORT;

  // database connection
  const client = mongodb.MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const urls = client.db("urlshortener").collection("urls");

  // web server
  const app = express();

  app.engine("jsx", expressReactViews.createEngine());
  app.set("view engine", "jsx");

  app.get("/", (req, res) => {
    res.render("home");
  });
  app.post("/", express.urlencoded({ extended: false }), async (req, res) => {
    let url = req.body.url;
    if (!isUrl(url)) {
      url = "http://" + url;
    }
    if (!isUrl(url)) {
      res.render("invalid_url", { url });
      return;
    }
    // note: the id should be generated differently in a real-world application
    const shortId = Math.random().toString(36).substring(7);
    await urls.insertOne({ url, shortId });
    const shortUrl = HOST + "/" + shortId;
    res.render("short", { url, shortUrl });
  });
  app.get("/favicon.ico", (req, res) => {
    res.status(404);
    res.send();
  });
  app.get(
    "/:shortId",
    express.urlencoded({ extended: false }),
    async (req, res) => {
      const shortId = req.params.shortId;
      const entry = await urls.findOne({ shortId });
      if (entry === null) {
        res.status(404);
        res.render("not_found", { shortId: shortId });
      } else {
        res.redirect(entry.url);
      }
    }
  );

  app.listen(PORT);
};
main();
