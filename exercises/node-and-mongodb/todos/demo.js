import mongodb from "mongodb";
import dotenv from "dotenv";
import TodosDAO from "./TodosDAO.js";

dotenv.config();

const DB_URL = process.env.DB_URL;

const main = async () => {
  // create a mongo client and connect to the DB
  const client = mongodb.MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  // Create a "database access object"
  const todosDAO = new TodosDAO(client);
  console.log("Connected to database");
  await todosDAO.deleteAllTodos();
  console.log("Deleted all existing todos");
  await todosDAO.loadTodosFromJsonPlaceholder();
  console.log("Loaded todos from jsonplaceholder");
  await todosDAO.addTodo("learn mongodb");
  console.log("Added new todo: 'learn mongodb'");
  const nIncomplete = await todosDAO.getNumIncompleteTodos();
  const nComplete = await todosDAO.getNumCompletedTodos();
  console.log(
    `There are now ${nIncomplete} incomplete and ${nComplete} completed todos`
  );
  await todosDAO.deleteCompletedTodos();
  console.log("Deleted all completed todos");
  const queriedTodos = await todosDAO.getTodosByTitle("tempora");
  console.log(`Todos that contain the search term "tempora":`);
  for (let queriedTodo of queriedTodos) {
    console.log(`- ${queriedTodo.title}`);
  }
  for (let queriedTodo of queriedTodos) {
    await todosDAO.deleteTodoById(queriedTodo._id);
  }
  console.log('Deleted all todos that contain "tempora"');
  const learnMongodb = (await todosDAO.getTodosByTitle("learn"))[0];
  await todosDAO.updateStatusById(learnMongodb._id, true);
  console.log("Changed status of 'learn mongodb' to completed");
  await todosDAO.updateTitleById(learnMongodb._id, "learn MongoDB");
  console.log("Changed title of 'learn mongodb' to 'learn MongoDB'");
  const learnMongodbNew = await todosDAO.getTodoById(learnMongodb._id);
  console.log(`new title: ${learnMongodbNew.title}`);
  const nIncompleteNew = await todosDAO.getNumIncompleteTodos();
  const nCompleteNew = await todosDAO.getNumCompletedTodos();
  console.log(
    `There are now ${nIncompleteNew} incomplete and ${nCompleteNew} completed todos`
  );

  // disconnect from the DB
  await client.close();
};
main();
