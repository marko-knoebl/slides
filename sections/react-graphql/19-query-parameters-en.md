# Parametric queries

## Query parameters

Example on [https://api.spacex.land/graphql/](https://api.spacex.land/graphql/):

```graphql
{
  launchesUpcoming(limit: 4) {
    launch_date_utc
    mission_name
  }
}
```

```graphql
{
  rocket(id: "falcon9") {
    cost_per_launch
    wikipedia
  }
}
```

## Query parameters

Advanced query - all _Falcon 9_ launches in 2019:

```graphql
{
  launchesPast(
    find: { launch_year: "2019", rocket_name: "Falcon 9" }
  ) {
    launch_date_utc
    launch_site {
      site_name
      site_name_long
    }
  }
}
```

Note: The server-side implementation determines the set of supported parameters (e.g. _find_, _id_, _limit_ ...)

## Required and optional parameters

Required parameters are (usually) marked with a `!`. Returned attributes that will always be present (like `id`) are marked in the same way.

## Variables

query:

```graphql
query getLaunchesByYear($year: String!) {
  launchesPast(find: { launch_year: $year }) {
    launch_date_utc
    launch_site {
      site_name
      site_name_long
    }
  }
}
```

variables:

```json
{
  "year": "2019"
}
```
