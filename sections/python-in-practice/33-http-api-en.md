# HTTP API development

## HTTP API development

For basics see the [presentation on HTTP](./http-en.html#/1)

## HTTP API development

tools for API development with Python:

- FastAPI
- Django REST framework
- flask-restful
- graphene (GraphQL APIs)

## HTTP API development

Task: develop a simple API with FastAPI that has these resouces:

- `/time`
- `/date`
- `/randnr` (random number)

## HTTP API development

Task:

develop an API with FastAPI that can manage a list of todos

implement these endpoints:

- `GET /todos` (JSON array of all todos)
- `GET /todos/$id` (single todo by id)
- `POST /todos` (add a todo)
- `DELETE /todos/$id` (delete a single todo)
- `PATCH /todos/$id` (modify a todo)
- `POST /delete_completed_todos`

The todos can be stored in a simple JSON file - or in an actual database
