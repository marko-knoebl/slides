# Übungen (GitHub)

## Übungen

- Frage alle "follower von followern" für einen bestimmten GitHub-Account ab
- Frage für einen bestimmten GitHub-Account alle Projekte mit Namen und Sternenanzahl ab

## Übungen - Lösungen

```
query {
  user (login: "marko-knoebl") {
    followers (first: 10) {
      nodes {
        login,
        followers (first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}
```

## Übungen - Lösungen

```graphql
query {
  user(login: "marko-knoebl") {
    id
    email
    repositories(
      first: 100
      orderBy: { field: STARGAZERS, direction: DESC }
    ) {
      nodes {
        name
        stargazers {
          totalCount
        }
      }
    }
  }
}
```
