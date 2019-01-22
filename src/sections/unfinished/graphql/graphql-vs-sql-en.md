class: center, middle

# GraphQL vs SQL

---

# GraphQL vs SQL: examples

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
  WHERE login="my-username"
```

---

# GraphQL vs SQL

In GraphQL parameters don't have a predefined meaning.

In SQL the clause `WHERE login="my-username` always has the same meaning

In GraphQL the meaning of `login: "my-username"` is up to the implementation on the server

---

# GraphQL vs SQL

SQL: relationships between tables (joins) are defined in the query

GraphQL: already knows about relationships when the query is issued

-> simpler queries

---

# GraphQL vs SQL

```graphql
query {
  user(id: "my-username") {
    posts {
      name
    }
  }
}
```

```sql
SELECT name
  FROM user
  INNER JOIN post ON user.id = post.userId
  WHERE user.id = "my-username"
```

(extra code: `INNER JOIN post ON user.id = post.userId`)

---

# GraphQL vs SQL

**OpenCRUD** is a more specifc standard that is based on GraphQL. It maps directly to SQL and can be used in place of it.

---
