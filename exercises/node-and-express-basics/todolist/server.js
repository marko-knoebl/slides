import dotenv from "dotenv";
import express from "express";
import expressOpenidConnect from "express-openid-connect";
import expressReactViews from "express-react-views";
import mongodb from "mongodb";

const main = async () => {
  dotenv.config();

  const DB_URL = process.env.DB_URL;
  const PORT = process.env.PORT;

  const BASE_URL = process.env.BASE_URL;
  const CLIENT_ID = process.env.CLIENT_ID;
  const ISSUER_BASE_URL = process.env.ISSUER_BASE_URL;
  const SECRET = process.env.SECRET;

  // database connection
  const client = mongodb.MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db("todolist-multiuser");

  // web server
  const app = express();

  app.engine("jsx", expressReactViews.createEngine());
  app.set("view engine", "jsx");

  app.use(
    expressOpenidConnect.auth({
      authRequired: false,
      auth0Logout: true,
      baseURL: BASE_URL,
      clientID: CLIENT_ID,
      issuerBaseURL: ISSUER_BASE_URL,
      secret: SECRET,
    })
  );

  app.get("/", async (req, res) => {
    if (req.oidc.isAuthenticated()) {
      const user = req.oidc.user;
      const name = user.given_name || user.name;
      const sub = user.sub;
      const todos = await db
        .collection("todos")
        .find({ userSub: sub })
        .toArray();
      res.render("index", { username: name, todos: todos });
    } else {
      res.render("index_logged_out");
    }
  });

  // provide access to req.body for all post requests
  app.use(express.urlencoded({ extended: false }));

  app.post("/add_todo", async (req, res) => {
    const sub = req.oidc.user.sub;
    const title = req.body.title;
    await db.collection("todos").insertOne({
      userSub: sub,
      title: title,
      completed: false,
    });
    res.redirect("/");
  });
  app.post("/delete_todo", async (req, res) => {
    await db.collection("todos").deleteOne({
      userSub: req.oidc.user.sub,
      _id: new mongodb.ObjectID(req.body.id),
    });
    res.redirect("/");
  });
  app.post("/toggle_todo", async (req, res) => {
    const todo = await db.collection("todos").findOne({
      userSub: req.oidc.user.sub,
      _id: new mongodb.ObjectID(req.body.id),
    });
    await db.collection("todos").updateOne(
      {
        userSub: req.oidc.user.sub,
        _id: new mongodb.ObjectID(req.body.id),
      },
      { $set: { completed: !todo.completed } }
    );
    res.redirect("/");
  });
  app.post("/delete_completed", async (req, res) => {
    await db
      .collection("todos")
      .deleteMany({ userSub: req.oidc.user.sub, completed: true });
    res.redirect("/");
  });

  app.listen(PORT);
};
main();
