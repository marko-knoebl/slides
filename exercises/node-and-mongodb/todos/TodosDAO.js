// Todos DAO = Database Access Ojbect

import fetch from "node-fetch";

class TodosDAO {
  constructor(client) {
    this.todos = client.db("todolist").collection("todos");
  }
  async addTodo(title) {
    await this.todos.insertOne({
      title: title,
      completed: false,
    });
  }
  async deleteAllTodos() {
    await this.todos.deleteMany({});
  }
  async deleteCompletedTodos() {
    await this.todos.deleteMany({ completed: true });
  }
  async deleteTodoById(id) {
    await this.todos.deleteOne({ _id: id });
  }
  async getAllTodos() {
    return await this.todos.find({}).toArray();
  }
  async getNumTodos() {
    return await this.todos.find({}).count();
  }
  async getNumCompletedTodos() {
    return await this.todos.find({ completed: true }).count();
  }
  async getNumIncompleteTodos() {
    return await this.todos.find({ completed: false }).count();
  }
  async getTodoById(id) {
    return await this.todos.findOne({ _id: id });
  }
  async getTodosByTitle(title) {
    return await this.todos.find({ title: { $text: title } }).toArray();
  }
  async getTodosByStatus(status) {
    return await this.todos.find({ completed: status }).toArray();
  }
  async loadTodosFromJsonPlaceholder() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const apiData = await res.json();
    const data = apiData.map((todo) => ({
      title: todo.title,
      completed: todo.completed,
    }));
    await this.todos.insertMany(data);
  }
  async updateStatusById(id, newStatus) {
    await this.todos.updateOne({ _id: id }, { $set: { completed: newStatus } });
  }
  async updateTitleById(id, newTitle) {
    await this.todos.updateOne({ _id: id }, { $set: { title: newTitle } });
  }
}

export default TodosDAO;
