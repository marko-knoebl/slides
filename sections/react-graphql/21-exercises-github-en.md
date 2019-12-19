# Exercises (GitHub)

## Exercises

- Get all "followers of followers" for a specific GitHub account
- Get the name of a project and number of stars for all GitHub projects of a specific user

## Exercises - solutions

```graphql
query {
  user(login: "marko-knoebl") {
    followers(first: 10) {
      nodes {
        login
        followers(first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}
```

## Exercises - solutions

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
