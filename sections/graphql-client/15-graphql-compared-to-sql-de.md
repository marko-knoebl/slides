# GraphQL verglichen mit SQL

## GraphQL verglichen mit SQL

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

## GraphQL verglichen mit SQL

GraphQL: Parameter haben keine vordefinierte Bedeutung

In SQL: `WHERE login='my-username'` hat klare Bedeutung

GraphQL: Bedeutung von `login: "my-username"` ist der Implementierung am Server überlassen

## GraphQL verglichen mit SQL

SQL: Beziehungen zwischen Tabellen (Joins) werden in der Query definiert

GraphQL: kennt die Beziehungen bereits → einfachere Queries

## GraphQL verglichen mit SQL

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

(extra Code: `LEFT JOIN post ON user.id = post.userId`)

## GraphQL verglichen mit SQL

**OpenCRUD**: spezifischerer Standard, der auf GraphQL basiert - er kann anstelle von SQL verwendet werden
