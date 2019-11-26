# GraphQL vs REST: Example

## GraphQL vs REST

Scenario:

A social media app in which we can view a list of our friends. Clicking on a friend takes us to their most recent posts

## API in REST

```http
GET /users/$myuserid/friends
```

```http
GET /users/$otheruserid/posts
```

## API in GraphQL

```graphql
{
  users(id: "myuserid") {
    friends {
      userid
      name
    }
  }
}
```

## API in GraphQL

```graphql
{
  users(id: "otheruserid") {
    posts {
      date
      title
      body
    }
  }
}
```

## Adding functionality: new post feed

Display new posts of all friends in a feed

## Adding functionality: new post feed

In REST we would either have to send multiple requests to retrieve all posts of friends - or we would have to implement a new endpoint in the API:

```http
GET /postsoffriends/$myuserid
```

## Adding functionality: new post feed

In GraphQL we can implement this with just one request and without creating new endpoints:

```graphql
{
  users(id: "$myuserid") {
    friends {
      posts {
        date
        title
        body
      }
    }
  }
}
```
