# GraphQL compared to SQL

## GraphQL compared to SQL

```graphql
query {
  user(login: "my-username") {
    login
    name
  }
}
```

```sql
SELECT login, name
  FROM user
  WHERE login='my-username';
```

## GraphQL compared to SQL

In GraphQL parameters don't have a predefined meaning.

In SQL the clause `WHERE login='my-username'` always has the same meaning

In GraphQL the meaning of `login: "my-username"` is up to the implementation on the server

## GraphQL compared to SQL

SQL: relationships between tables (joins) are defined in the query

GraphQL: already knows about relationships when the query is issued → simpler queries

## GraphQL compared to SQL

```graphql
query {
  user(login: "my-username") {
    posts {
      title
    }
  }
}
```

```sql
SELECT post.title
  FROM user
  LEFT JOIN post ON user.id = post.userId
  WHERE user.login = 'my-username';
```

(extra code: `LEFT JOIN post ON user.id = post.userId`)

## GraphQL compared to SQL

**OpenCRUD** is a more specifc standard that is based on GraphQL. It maps directly to SQL and can be used in place of it.
