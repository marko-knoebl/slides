# Authentication and authorization

## Authentication and authorization

topics:

- terminology
- roles and permissions
- session tokens
- passwords and password hashes

## Terminology

- **authentication**: Is this request really coming from user _xyz_?
- **authorization**: Is user _xyz_ authorized to see / modify this data?

## Roles and permissions

examples for roles and permissions on a news site:

- _guests_ can see the first _500_ characters of each article
- _users_ can see all articles; users can see comments; users can create, edit and delete their own comments
- _moderators_ can create, update and delete articles; moderators can delete comments

## Session tokens

typical auth flow with _tokens_:

- client sends authentication data (e.g. username + password) to the server
- server checks for correctness
- server sends back a secret "token" for this session (as a string)
- client can access pages / APIs using that token
- token will usually become invalid after some specific time / if the user logs out

## Session tokens

session tokens are sent from the client to a server in HTTP headers:

- _Authorization_ header (needs client-side JavaScript)
- _Cookie_ header

## Session tokens

example on the client: logging in via username and password and getting the token:

```js
const loginRes = await fetch('/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'foo',
    password: 'bar',
  }),
});
const loginData = await loginRes.json();
const token = loginData.token;
```

## Session tokens

example on the client: accessing some data via the token:

```js
const notesRes = await fetch('/api/notes', {
  headers: { Authorization: `Bearer ${token}` },
});
const notes = await notesRes.json();
```

## Session tokens

example on the server side: login request:

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

## Session tokens

example on the server: data request:

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

## Passwords and password hashes

- bad practice: storing passwords directly in the database (in plain text)
- better: storing password hashes
- ideal / standard: storing password hashes that are "salted" and "peppered"

## Passwords and password hashes

plain data:

```
name    | password
--------+--------------------
alice   | 123456
bob     | 123456
charlie | abc123
```

## Passwords and password hashes

data with hashed passwords:

```
name    | password hash
--------+---------------------------------
Alice   | e10adc3949ba59abbe56e057f20f883e
Bob     | e10adc3949ba59abbe56e057f20f883e
Charlie | e99a18c428cb38d5f260853678922e03
```

## Passwords and password hashes

hashing algorithms - sorted from _most secure_ to _not secure_:

- Argon2
- scrypt
- bcrypt
- PBKDF2
- MD5
