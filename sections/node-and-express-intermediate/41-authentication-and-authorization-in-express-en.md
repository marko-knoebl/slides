# Authentication and authorization in Express

## Example: Login Handler

```js
app.post('/api/login', async (req, res) => {
  const success = await authService.validateLogin(
    req.body.username,
    req.body.password
  );
  if (success) {
    const token = authService.createRandomToken();
    await authService.saveSession(req.body.username, token);
    res.json({ token: token });
  } else {
    res.status(401).send();
  }
});
```

## Example: Data Handler

```js
app.get('/api/notes/:id', async (req, res) => {
  const authHeader = req.header('Authorization');
  const token = authHeader.split(' ')[1];
  const session = await authService.getSession(token);
  if (!session) {
    // not authenticated
    res.status(401).send();
    return;
  }
  const note = await notesService.getNote(req.params.id);
  const role = await authService.getRole(session);
  if (role === 'user' && session.userId === note.userId) {
    res.json(note);
  } else if (role === 'admin') {
    res.json(note);
  } else {
    // not authorized
    res.status(403).send();
  }
});
```
