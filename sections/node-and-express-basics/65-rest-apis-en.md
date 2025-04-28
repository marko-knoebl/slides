# Rest APIs

## Rest APIs

We'll create an example Rest API with express and a database that's connected via the _mysql2_ library.

We will create a database named "tasklist" with a single table named "task"

## Rest APIs

note: Different Rest APIs can behave differently on _mutations_

example: possible responses when an entry has been created via _POST_:

- return the complete new entry in the response body (including its new id)
- return just the new id in the response body
- return no response body

## Rest APIs

basic setup:

```js
app.use('/api', express.json());
app.use('/api', cors());
```

## Rest APIs

get all entries from a resource:

```js
app.get('/api/tasks', async (req, res) => {
  const [results] = await db.query('SELECT * FROM task;');
  res.json(results);
});
```

## Rest APIs

get by a specific id:

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

get by some query parameters (_is_done_, _due_date_):

```js
app.get('/api/tasks/', async (req, res) => {
  // array of conditions - e.g. ['is_done = ?', 'due_date = ?']
  const conditions = [];
  // array of corresponding values - e.g. [1, '2020-10-30']
  const values = [];

  if (req.query.due_date !== undefined) {
    conditions.push('due_date = ?');
    values.push(req.query.due_date);
  }

  if (req.query.is_done !== undefined) {
    conditions.push('is_done = ?');
    // can be either "0" or "1"
    values.push(Number(req.query.is_done));
  }

  let sqlStatement = 'SELECT * FROM task';
  if (conditions.length > 0) {
    sqlStatement += ` WHERE ${conditions.join(' AND ')}`;
  }

  // sqlStatement = complete SQL statement with variables, e.g.:
  // SELECT * FROM task WHERE is_done = ? AND due_date = ?
  // values = corresponding values, e.g.:
  // [1, '2020-10-30']

  const [results] = await db.query(sqlStatement, values);
  res.json(results);
});
```

## Rest APIs

creating a new entry:

```js
app.post('/api/tasks', async (req, res) => {
  const isDone = req.body.is_done;
  const dueDate = req.body.due_date;
  if (isDone === undefined || dueDate === undefined) {
    // 400 Bad Request
    res.status(400).send();
    return;
  }
  const sqlStatement = `INSERT INTO task (due_date, is_done) VALUES (?, ?)`;
  const values = [dueDate, isDone];

  const [results] = await db.query(sqlStatement, values);

  // 201 Created (or 200 OK)
  res.status(201).json({ id: results.insertId });
});
```

## Rest API

replacing an entry - via put:

```js
app.put('/api/tasks/:id', async (req, res) => {
  const isDone = req.body.is_done;
  const dueDate = req.body.due_date;

  if (isDone === undefined || dueDate === undefined) {
    // 400 Bad Request
    res.status(400).send();
    return;
  }
  const id = Number(req.params.id);
  const sqlStatement = `
    UPDATE task
    SET due_date = ?, is_done = ?
    WHERE id = ?
  `;
  const values = [dueDate, isDone, id];
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

delete an entry:

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
