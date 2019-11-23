# GraphQL vs REST: Beispiel

## GraphQL vs REST

Szenario:

Social media App, in der wir eine Liste von Freunden anzeigen können. Ein Klick auf einen Freund zeigt dessen letzte Posts.

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

## Funktionalität hinzufügen: Feed neuer Posts

Anzeigen neuer Posts aller Freunde

## Funktionalität hinzufügen: Feed neuer Posts

Umsetzung in REST:

- Möglichkeit 1: mehrere Requests senden
- Möglichkeit 2: neuer Endpunkt in der API, z.B. `/postsoffriends/$userid`

## Funktionalität hinzufügen: Feed neuer Posts

Umsetzung in GraphQL:

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
