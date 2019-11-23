# Apollo client

## Writing the render function

The Query component's child element _is a function_. This function will receive the queried data and return a React component tree. In that way this function is similar to the _render_ method we're familiar with.

## Writing the render function

The render function receives an object that can have a number of properties, including:

- `data`: the response body
- `loading`: a boolean indicating whether the request is ongoing
- `error`: indicates network errors or GraphQL errors

full API: https://www.apollographql.com/docs/react/essentials/queries.html#render-prop

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

## Mutations

Inside a mutation the `customRenderFunction` will receive _two_ arguments:

- the _second_ argument (which is not always needed) is the same as the first argument for a query. So it contain properties like `data`, `loading`, ...
- the _first_ argument is a function that, when called, will send the specified mutation to the server

So one important distinction between queries and mutations in Apollo client is: Queries get sent to the server automatically when the component is mounted. Mutations must be sent manually (e.g. when the user clicks a button).

## Subscriptions

Subscriptions can be handled via websockets

```bash
npm install apollo-link-ws subscriptions-transport-ws
```

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

## Subscriptions

```jsx
<Subscription subscription={SUBSCRIBE_POSTS_TEMPLATE}>
  {this.subscriptionRenderer}
</Subscription>
```

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

## Subscriptions

```js
subscriptionRenderer = ({ data }) => {
  return (
    <div>modified post: {data && data.Post.node.title}</div>
  );
};
```

## Exercise: Hackernews clone

Do the React-Apollo tutorial at https://howtographql.com

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
