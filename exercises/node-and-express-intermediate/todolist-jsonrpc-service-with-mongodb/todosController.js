import fetch from "node-fetch";
import mongodb from "mongodb";

// interface between json-rpc call and database

const createTodosController = (todos) => {
  return {
    add_todo: async ({ title }) => {
      await todos.insertOne({ title: title, completed: false });
    },
    delete_all_todos: async () => {
      await todos.deleteMany({});
    },
    delete_completed_todos: async () => {
      await todos.deleteMany({ completed: true });
    },
    delete_todo_by_id: async ({ id }) => {
      await todos.deleteOne({ _id: new mongodb.ObjectID(id) });
    },
    get_all_todos: async () => await todos.find({}).toArray(),
    get_num_todos: async () => await todos.find({}).count(),
    get_num_completed_todos: async () =>
      await todos.find({ completed: true }).count(),
    get_num_incomplete_todos: async () =>
      await todos.find({ completed: false }).count(),
    get_todo_by_id: async ({ id }) =>
      await todos.findOne({ _id: new mongodb.ObjectID(id) }),
    get_todos_by_title: async ({ title }) =>
      todos.find({ title: { $regex: new RegExp(title, "i") } }).toArray(),
    get_todos_by_status: async ({ status }) =>
      await todos.find({ completed: status }).toArray(),
    load_todos_from_jsonplaceholder: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const apiData = await res.json();
      const data = apiData.map((todo) => ({
        title: todo.title,
        completed: todo.completed,
      }));
      await todos.insertMany(data);
    },
    update_status_by_id: async ({ id, status }) => {
      await todos.updateOne(
        { _id: new mongodb.ObjectID(id) },
        { $set: { completed: status } }
      );
    },
    update_title_by_id: async ({ id, title }) => {
      await todos.updateOne(
        { _id: new mongodb.ObjectID(id) },
        { $set: { title: title } }
      );
    },
  };
};

export { createTodosController };

/*
NOTE:
another potential interface would be creating
this via a class:

class TodosController {
  constructor(todos) {
    this.todos = todos;
  }
  async add_todo({ title }) {
    await this.todos.insertOne({ title: title, completed: false });
  }
}

the above interface would not work with jaysonServer:
  TypeError: method definition must be either a
  function, an instance of jayson.Client or an
  instance of jayson.Method
this.constructor and this.todos violate the schema
*/
