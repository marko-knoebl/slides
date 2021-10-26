# Mutationen

## Mutationen

https://todo-mongo-graphql-server.herokuapp.com/

(nur Definition _einzelner_ Queries möglich)

## Mutationen

Befehl, der die `add`-Aktion am Server triggert und die id des neuen Todos zurückliefert:

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

## Mutationen

```graphql
mutation toggleTodo($id: String!) {
  toggle(id: $id) {
    id
    completed
  }
}
```

## Mutationen

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

## Mutationen

Aufgabe: Schreibe eine Query, die alle bisherigen Einträge löscht und zwei neue erstellt

## Mutationen

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
