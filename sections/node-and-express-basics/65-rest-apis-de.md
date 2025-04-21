# Rest APIs

## Rest APIs

Wir erstellen eine Rest API mit express und einer Datenbank, die mittels der _mysql2_ Library verbunden ist.

Die Datenbank enthält eine einzelne Tabelle namens "task"

## Rest APIs

Bemerkung: Verschiedene Rest APIs können sich bei _Mutationen_ oft unterschiedlich verhalten

Beispiel: Mögliche Antworten, wenn ein Eintrag mittels _POST_ erstellt wurde:

- der vollständige neue Eintrag wird im Response Body zurückgeschickt (inklusive neu zugewiesener id)
- nur die neue id wird im Body zurückgeschickt
- kein Response Body wird zurückgeschickt

## Rest APIs

grundlegendes Setup:

```js
app.use('/api', express.json());
app.use('/api', cors());
```

## Rest APIs

Alle Einträge einer Ressource abfragen:

```js
app.get('/api/tasks', async (req, res) => {
  const [results] = await db.query('SELECT * FROM task;');
  res.json(results);
});
```

## Rest APIs

nach einer bestimmten id abfragen:

```js
app.get('/api/tasks/:id', async (req, res) => {
  const id = Number(req.params.id);
  const sqlStatement = 'SELECT * FROM task WHERE id = ?';
  const [results] = await db.query(sqlStatement, [id]);
  if (results.length === 0) {
    // 404 Not Found
    res.status(404).send();
  } else {
    res.json(results[0]);
  }
});
```

## Rest APIs

nach bestimmten Parametern abfragen (_done_, _due_date_):

```js
app.get('/api/tasks/', async (req, res) => {
  // array of conditions - e.g. ['done = ?', 'due_date = ?']
  const conditions = [];
  // array of corresponding values - e.g. ['true', '2020-10-30']
  const values = [];

  if (req.query.due_date) {
    conditions.push('due_date = ?');
    values.push(req.query.due_date);
  }

  if (req.query.done) {
    conditions.push('done = ?');
    if (
      req.query.done === '0' ||
      req.query.done === 'false'
    ) {
      values.push(false);
    } else {
      values.push(true);
    }
  }

  let sqlStatement = 'SELECT * FROM task';
  if (conditions.length > 0) {
    sqlStatement += ` WHERE ${conditions.join(' AND ')}`;
  }

  const [results] = await db.query(sqlStatement, values);
  res.json(results);
});
```

## Rest APIs

Einen neuen Eintrag erstellen:

```js
app.post('/api/tasks', async (req, res) => {
  const sqlStatement = `INSERT INTO task (due_date, done) VALUES (?, ?)`;
  const values = [req.body.due_date, req.body.done];

  const [results] = await db.query(sqlStatement, values);

  // 201 Created (or 200 OK)
  res.status(201).json({ id: results.insertId });
});
```

## Rest API

einen Eintrag ersetzen - via put:

```js
app.put('/api/tasks/:id', async (req, res) => {
  if (
    req.body.done === undefined ||
    req.body.due_date === undefined
  ) {
    // 400 Bad Request
    res.status(400).send();
    return;
  }
  const id = Number(req.params.id);
  const sqlStatement = `
    UPDATE task
    SET due_date = ?, done = ?
    WHERE id = ?
  `;
  const values = [req.params.due_date, done, id];
  const [results] = await db.query(sqlStatement, values);
  if (results.affectedRows === 0) {
    // 404 Not Found
    res.status(404).send();
  } else {
    res.send();
  }
});
```

## Rest API

Löschen eines Eintrags:

```js
app.delete('/api/tasks/:id', async (req, res) => {
  const id = Number(req.params.id);
  const sqlStatement = `DELETE FROM task WHERE id = ?`;
  const values = [id];
  const [results] = await db.query(sqlStatement, values);

  if (results.affectedRows === 0) {
    // 404 Not Found
    res.status(404).send();
  } else {
    res.send();
  }
});
```

## Exercise

- POST request to /reset - deletes table "task", recreates table "task" with columns _id_, _done_ (boolean), _due_date_ (string)
- POST request to /create*demodata - fills the table with some demo data from \_example_data.json* (note: the post request does not need a body, the demo data should be read directly from the directory)
- GET request to /tasks : returns all tasks
- GET request to /tasks/:id : returns one specific task
- GET request to /tasks?done=0 or /tasks?done=false : returns incomplete tasks
- POST request to /tasks : creates a new task
- PUT request to /tasks/:id : overwrites an existing task
- DELETE request to /tasks/:id : deletes an existing task

## Exercise

- GET request to /notes : shows all notes
- GET request to /notes/:id : shows one specific note
- GET request to /notes?created_after=2012-03-04: only shows notes created after a specific date
- POST request to /notes: creates a new note
- PUT request to /notes/:id : overwrites an existing note
- DELETE request to /notes/:id : deletes an existing note
