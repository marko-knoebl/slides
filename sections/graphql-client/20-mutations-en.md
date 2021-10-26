# Mutations

## Mutations

https://todo-mongo-graphql-server.herokuapp.com/

(supports only one query at a time)

## Mutations

Command that triggers the server's `add` action and returns the id of the new TODO

```graphql
mutation addTodo($title: String!) {
  add(title: $title) {
    id
  }
}
```

```json
{
  "title": "shopping"
}
```

## Mutations

```graphql
mutation toggleTodo($id: String!) {
  toggle(id: $id) {
    id
    completed
  }
}
```

## Mutations

```graphql
mutation addOneAndClearCompleted($title: String!) {
  add(title: $title) {
    id
  }
  clearCompleted {
    id
  }
}
```

## Mutations

Task: write a query that will delete all previous entries and add two new ones

## Mutations

```graphql
mutation reset {
  toggleAll(checked: true) {
    id
  }
  clearCompleted {
    id
  }
  add(title: "get some rest") {
    id
  }
}
```
