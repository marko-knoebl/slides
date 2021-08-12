import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";
import errorhandler from "errorhandler";
import express from "express";
import mongodb from "mongodb";
import morgan from "morgan";

dotenv.config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

const main = async () => {
  // set up db connection
  const client = mongodb.MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("Connected to database");
  const todos = client.db("todolist").collection("todos");

  // set up web server
  const app = express();
  app.use(morgan("common"));
  app.use(compression());
  app.use(cors());
  app.get("/", (req, res) => {
    res.send("<h1>Welcome to the API</h1>");
  });
  app.use(express.json());

  // read multiple
  app.get("/todos", async (req, res) => {
    let results;
    if (req.query.completed !== undefined) {
      const completed = req.query.completed === "true";
      results = await todos.find({ completed: completed }).toArray();
    } else {
      results = await todos.find({}).toArray();
    }
    res.json(
      results.map((todo) => ({
        id: todo._id,
        title: todo.title,
        completed: todo.completed,
      }))
    );
  });
  // read one
  app.get("/todos/:id", async (req, res) => {
    const todo = await todos.findOne({
      _id: new mongodb.ObjectID(req.params.id),
    });
    res.json({ id: todo._id, title: todo.title, completed: todo.completed });
  });

  // create one
  app.post("/todos", async (req, res) => {
    const result = await todos.insertOne({
      title: req.body.title,
      completed: false,
    });
    const newTodo = result.ops[0];
    res.json({
      id: newTodo._id,
      completed: newTodo.completed,
      title: newTodo.title,
    });
  });

  // update one
  app.patch("/todos/:id", async (req, res) => {
    await todos.updateOne(
      { _id: new mongodb.ObjectID(req.params.id) },
      { $set: req.body }
    );
  });

  // delete one
  app.delete("/todos/:id", async (req, res) => {
    await todos.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  });
  // delete multiple
  app.delete("/todos", async (req, res) => {
    if (req.query.completed === "true") {
      // delete all completed todos
      await todos.deleteMany({ completed: true });
    } else {
      // delete all todos
      await todos.deleteMany({});
    }
  });

  app.use(errorhandler);
  console.log("Starting http server");
  app.listen(PORT);
};
main();
