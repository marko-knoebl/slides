# Exercise: adding a GraphQL API to our TODO app

We will use a shared GraphQL API at

https://5qn401kkl9.lp.gql.zone/graphql

(it should return "GET query missing." in the browser)

---

# Exercise: adding a GraphQL API to our TODO app

- query todos from the API when the page loads
- query again when the user clicks a refresh button
- send a mutation when the user adds a todo
- send a mutation when the user toggles a todo

---

# Exercise: adding a GraphQL API to our TODO app

```js
const graphqlQuery = `query getTodos { todos { id title completed } }`;
const requestBody = JSON.stringify({ query: graphqlQuery });
fetch('https://5qn401kkl9.lp.gql.zone/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: requestBody,
})
  .then(response => response.json())
  .then(responseData => {
    console.log(responseData);
    dispatch(receiveTodos(responseData.data.todos));
  });
```

---
