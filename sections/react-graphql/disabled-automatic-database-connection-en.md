# Database connection

## Database connection

- direct manual connection
- direct connection, e.g. via postgraphile
- connection via an intermediate GraphQL layer, e.g. via prisma

## Prisma and OpenCRUD

**OpenCRUD** is a more specific version of GraphQL which maps to SQL commands

examples:

```graphql
query getUser4 {
  user(where: { id: 4 }) {
    name
  }
}
```

```graphql
query getTopRatedMovies {
  movie(where: { rating_gte: 4 }, orderBy: ...) {
    name
  }
}
```

## Prisma and OpenCRUD

Prisma will automatically create an _OpenCRUD_ API for a database (MySQL, Postgres or MongoDB)

## database connection with Prisma

tutorial: https://www.howtographql.com/graphql-js/4-adding-a-database/
