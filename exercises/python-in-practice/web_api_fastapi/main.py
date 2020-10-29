from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json


class Todo(BaseModel):
    id: int
    title: str
    completed: bool


app = FastAPI()


def load_todos():
    data_file = open("./data.json", encoding="utf-8")
    content = json.load(data_file)
    data_file.close()
    todos = content["todos"]
    return todos


def save_todos(todos):
    data_file = open("./data.json", "w", encoding="utf-8")
    content = json.dump({"todos": todos}, data_file, indent=2)
    data_file.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


@app.get("/todos/")
def read_todos():
    todos = load_todos()
    return todos


@app.get("/todos/{todo_id}")
def read_todo(todo_id: int):
    todos = load_todos()
    filtered_todos = [todo for todo in todos if todo["id"] == todo_id]
    if len(filtered_todos) == 0:
        raise HTTPException(status_code=404, detail="Item not found")
    return filtered_todos[0]


@app.post("/todos")
def add_todo(title: str):
    todos = load_todos()
    max_id = 0
    for todo in todos:
        if todo["id"] > max_id:
            max_id = todo["id"]
    new_id = max_id + 1
    todos.append({"id": new_id, "title": title, "completed": False})
    save_todos(todos)


@app.put("/todos/{todo_id}")
def modify_todo(todo_id: int, todo: Todo):
    todos = load_todos()
    filtered_todos = [todo for todo in todos if todo["id"] == todo_id]
    if len(filtered_todos) == 0:
        raise HTTPException(status_code=404, detail="todo not found")
    t = filtered_todos[0]
    t["id"] = todo.id
    t["title"] = todo.title
    t["completed"] = todo.completed
    save_todos(todos)


@app.patch("/todos/{todo_id}")
def modify_todo(todo_id: int, title: str = None, completed: bool = None):
    todos = load_todos()
    filtered_todos = [todo for todo in todos if todo["id"] == todo_id]
    if len(filtered_todos) == 0:
        raise HTTPException(status_code=404, detail="todo not found")
    todo = filtered_todos[0]
    if title is not None:
        todo["title"] = title
    if completed is not None:
        todo["completed"] = completed
    save_todos(todos)


@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    todos = load_todos()
    found_index = None
    for index, todo in enumerate(todos):
        if todo_id == todo["id"]:
            found_index = index
    if found_index is None:
        raise HTTPException(status_code=404, detail="todo not found")
    todos.pop(found_index)
    save_todos(todos)
