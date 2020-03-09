# graphql-yoga

## Example: chatroom

We want to create an API for a chatroom

## Example: chatroom

We'll create these interactions with the server:

- getMessages
- postMessage

## Example: reddit clone

```graphql
query {
  currentUser {
    id
  }
  subreddit(name="news") {
    lastPosts {
      title
      url
      id
    }
  }
  post(id="abc") {
    title
    url
    id
    subreddit
  }
}

mutation {
  newPost(title="my new post", authToken="xxx") {
    id
  }
  login(username="abc", password="xyz") {
    authToken
  }
}
```

## Example: message board

see example tutorial code

## Example: Todo list

We want to create an API for a todo list

For now we will keep our data in memory on the server

## Example: Todo list

We'll create these query types:

- `todo(id: ID!)`
- `todos()`
- `createTodo(...)`
- `modifyTodo(...)`
- `deleteTodo(...)`

<!--
see:
courses-tutorials/graphql-server-todo
-->
