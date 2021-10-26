# GraphQL from JavaScript

## Sending queries to the server

Queries are sent to the server via HTTP POST requests

The payload is a JSON object which has a `query` string property (this is also true when sending mutations) and optionally a `variables` property.

## Sending queries to the server

We can try this out from the browser console via fetch (we have to be on the same website):

```js
const requestBody = {
  query:
    'mutation addTodo($title: String!) { add(title: $title) { id } }',
  variables: '{"title": "test"}',
};

const requestBodyStr = JSON.stringify(requestBody);

fetch('https://todo-mongo-graphql-server.herokuapp.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: requestBodyStr,
}).then(console.log);
```

## Example: reddit API

```js
const queryTemplate = `
{
  reddit {
    subreddit(name: "javascript") {
      newListings(limit: 2) {
        title
      }
    }
  }
}`;
```

## Example: reddit API

```js
fetch('https://www.graphqlhub.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query: queryTemplate }),
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```
