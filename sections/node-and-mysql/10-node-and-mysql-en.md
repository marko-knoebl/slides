# Node and MySQL

## npm packages

packages on _npm_:

- _mysql_
- _mysql2_ (extended functionality, e.g. _promises_)

## Connecting to a database

```js
import mysql from 'mysql2/promise';

const dbConn = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'world',
});
```

## Querying data

```js
const sqlStatement =
  "SELECT * FROM country WHERE Continent = 'Europe'";

const [results, fields] = await dbConn.query(sqlStatement);
```

## Querying data

using placeholders:

```js
async function getCountries(continent, minPopulation) {
  const sqlStatement = `
    SELECT * FROM country
    WHERE Continent = ? AND Population > ?
  `;
  const params = [continent, minPopulation];

  const [results] = await dbConn.query(
    sqlStatement,
    params
  );
  return results;
}
```

## Querying data

using placeholders that may be undefined:

```js
async function getCountries(continent, minPopulation) {
  let sqlStatement = 'SELECT * FROM country';

  const conditions = [];
  const params = [];

  if (continent !== undefined) {
    conditions.push('continent = ?');
    params.push(continent);
  }
  if (minPopulation !== undefined) {
    conditions.push('population >= ?');
    params.push(minPopulation);
  }

  if (conditions.length > 0) {
    // e.g.: "continent = ? AND population >= ?"
    const conditionString = conditions.join(' AND ');
    // complete SQL statement with conditions and placeholders, e.g.:
    // SELECT * FROM country WHERE continent = ? AND population >= ?
    sqlStatement += ' WHERE ' + conditionString;
  }

  const [results] = await dbConn.query(
    sqlStatement,
    params
  );
  return results;
}
```

## Updating data

```js
const sqlStatement =
  "UPDATE country SET population = 0 WHERE Code = 'Aut'";

const [results] = await dbConn.query();

console.log(results.affectedRows); // should be 1
```
