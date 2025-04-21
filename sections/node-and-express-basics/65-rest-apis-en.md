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

get by some query parameters (_done_, _due_date_):

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

create a new entry:

```js
app.post('/api/tasks', async (req, res) => {
  if (
    req.body.due_date === undefined ||
    !['0', '1', 'false', 'true'].includes(req.body.done)
  ) {
    // 400 Bad Request
    res.status(400).send();
    return;
  }

  const sqlStatement = `INSERT INTO task (due_date, done) VALUES (?, ?)`;
  const values = [req.body.due_date, req.body.done];

  const [results] = await db.query(sqlStatement, values);

  // 201 Created (or 200 OK)
  res.status(201).json({ id: results.insertId });
});
```

## Rest API

replace an entry - via put:

```js
app.put('/api/tasks/:id', async (req, res) => {
  const done = req.body.done;
  const dueDate = req.body.due_date;

  if (done === undefined || dueDate === undefined) {
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
  const values = [dueDate, done, id];
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

## Exercise

- POST request to /reset - deletes table "task", recreates table "task" with columns _id_, _done_ (boolean), _due_date_ (string)
- POST request to `/create_demodata` - fills the table with some demo data from _example_data.json_ (note: the post request does not need a body, the demo data should be read directly from the directory)
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
