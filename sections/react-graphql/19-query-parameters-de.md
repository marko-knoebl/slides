# Parametrische Abfragen

## Abfrageparameter

Beispiel unter [https://api.spacex.land/graphql/](https://api.spacex.land/graphql/):

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

## Abfrageparameter

Alle _Falcon 9_-Starts im Jahr 2019:

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

Anmerkung: Die server-seitige Implementierung entscheidet über die unterstützten Parameter (z.B. _find_, _id_, _limit_, ...)

## Verpflichtende und optionale Parameter

Verpflichtende Parameter sind (üblicherweise) mit `!` gekennzeichnet - ebenso wie zurückgegebene Attribute, die immer vorhanden sind.

## Variablen

Abfrage:

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

Variablen:

```json
{
  "year": "2019"
}
```
