# Apollo client

---

## Apollo client

advantages over "plain" frontent code:

- automatic networking
- automatic caching

---

## Apollo link state

apollo library to manage local state (replacement for Redux ...)

---

## Apollo client fundamentals

Apollo client adds additional data sources that represent remote data

---

## The Query component

The `<Query>` component represents a GraphQL query that was sent to the server. The Query component can render different contents depending on whether it is still fetching results or not and on the result of the query. Conceptually a Query component is similar to what `connect()` does for Redux.

---

## The Query component

<!-- prettier-ignore -->
```jsx
<Query query={gql`query { feed { links { id url } } }`}>
  {queryState =>
    !queryState.loading &&
    queryState.data.feed.links.map(link => (
      <div>{link.url}</div>
    ))
  }
</Query>
```

---

## Installation

In an existing React project:

```bash
npm install apollo-boost react-apollo graphql
```

---

## Connecting React to a GraphQL server

```js
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: createHttpLink({
    uri:
      'https://api.graph.cool/simple/v1/cjmj9v4mk1zs00182rnrzdrai',
  }),
  cache: new InMemoryCache(),
});
```

---

## Connecting React to a GraphQL server

```jsx
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

---

## Writing GraphQL queries for Apollo

Via tagged template strings:

```js
import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query getPosts {
    allPosts {
      id
      title
      author {
        name
      }
    }
  }
`;
```

---

## Using the Query component

start with:

```js
import { Query } from 'react-apollo';

<Query query={POSTS_QUERY}>{customRenderFunction}</Query>;
```

---

## Writing the render function

The Query component's child element _is a function_. This function will receive the queried data and return a React component tree. In that way this function is similar to the _render_ method we're familiar with.

---

## Writing the render function

The render function receives an object that can have a number of properties, including:

- `data`: the response body
- `loading`: a boolean indicating whether the request is ongoing
- `error`: indicates network errors or GraphQL errors

full API: https://www.apollographql.com/docs/react/essentials/queries.html#render-prop

---

## Writing the render function

```jsx
({ data, loading, error }) => {
  if (loading) return <div>Fetching...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      {data.allPosts.map(post => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};
```

---

## Mutations

Apollo Client also provides a `Mutation` component that works similar to the `Query` component.

```jsx
<Mutation
  mutation={gql`mutation createPost($authorId: ID! ...`}
  variables={{ authorId: '123' }}
  refetchQueries={['getPosts']}>
  {customRenderFunction}
</Mutation>
```

---

## Mutations

Inside a mutation the `customRenderFunction` will receive _two_ arguments:

- the _second_ argument (which is not always needed) is the same as the first argument for a query. So it contain properties like `data`, `loading`, ...
- the _first_ argument is a function that, when called, will send the specified mutation to the server

So one important distinction between queries and mutations in Apollo client is: Queries get sent to the server automatically when the component is mounted. Mutations must be sent manually (e.g. when the user clicks a button).

---

## Subscriptions

Subscriptions can be handled via websockets

```bash
npm install apollo-link-ws subscriptions-transport-ws
```

---

## Subscriptions

```js
// Create an http link:
const httpLink = new HttpLink({
  uri:
    'https://api.graph.cool/simple/v1/cjmj9v4mk1zs00182rnrzdrai',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://subscriptions.graph.cool/v1/cjmj9v4mk1zs00182rnrzdrai`,
  options: {
    reconnect: true,
  },
});
```

---

## Subscriptions

```js
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    console.log(kind, operation);
    return (
      kind === 'OperationDefinition' &&
      operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);
```

---

## Subscriptions

```jsx
<Subscription subscription={SUBSCRIBE_POSTS_TEMPLATE}>
  {this.subscriptionRenderer}
</Subscription>
```

---

## Subscriptions

```js
const SUBSCRIBE_POST_CHANGE_TEMPLATE = gql`
  subscription {
    Post {
      node {
        author {
          id
        }
        title
      }
    }
  }
`;
```

---

## Subscriptions

```js
subscriptionRenderer = ({ data }) => {
  return (
    <div>modified post: {data && data.Post.node.title}</div>
  );
};
```

---

## Exercise: Hackernews clone

Do the React-Apollo tutorial at https://howtographql.com

---

## Authentication, setting headers

Middleware allows us to modify requests before they are sent to the server, e.g. by adding authentication headers:

```js
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
```

---
