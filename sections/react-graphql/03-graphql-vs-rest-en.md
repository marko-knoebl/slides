# GraphQL vs REST

## GraphQL vs REST

REST: The endpoint (e.g. `/todos`) and the method (e.g. `PUT`) are an essential part of the API and they indicate what will happen  
GraphQL: one endpoint that can be used for any operation - all requests are `POST` requests

GraphQL: the client can request exactly the objects and fields it needs

GraphQL: data is fetched within _one_ single HTTP request

## GraphQL vs REST

Scenario:

A social media app in which we can view a list of our friends. Clicking on a friend takes us to their most recent posts

## API in REST:

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

## new functionality: new post feed

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
