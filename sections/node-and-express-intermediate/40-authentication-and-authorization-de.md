# Authentifizierung und Authorisierung

## Authentifizierung und Authorisierung

Themen:

- Terminologie
- Roles und Permissions
- Session-Tokens
- Passwörter und Passwort-Hashes

## Terminologie

- **Authentifizierung**: Kommt diese Anfrage tatsächlich von User _xyz_?
- **Authorisierung**: Darf User _xyz_ diese Daten sehen / modifizieren?

## Rollen und Berechtigungen

Beispiele für Rollen und Berechtigungen auf einer Nachrichtenseite:

- Gäste können die ersten 500 Zeichen eines Artikels sehen
- _User_ können vollständige Artikel sehen; User können Kommentare sehen; User können eigene Kommentare erstellen, bearbeiten und löschen
- _Moderatoren_ können Artikel erstellen, ändern und löschen; Moderatoren können Kommentare löschen

## Session-Tokens

Typischer Auth-Ablauf mit _Tokens_:

- Client sendet Authentifizierungsdaten (z.B. Username + Passwort) zum Server
- Server überprüft Daten
- Server sendet ein geheimes Session-Token (als String) für diese Session zurück
- Client kann mit diesem Token auf bestimmte Seiten / APIs zugreifen
- Token wird typischerweise nach einer bestimmten Zeiten oder nach dem Logout ungültig

## Session-Tokens

Session-Tokens werden vom Client zum Server in HTTP-Headern gesendet:

- _Authorization_ Header (benötigt JavaScript am Client)
- _Cookie_ Header

## Session-Tokens

Beispiel am Client: Einloggen via Benutzername und Passwort, Erhalten des Tokens:

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

## Session-Tokens

Beispiel am Client: mit Hilfe des Tokens auf bestimmte Daten zugreifen:

```js
const notesRes = await fetch('/api/notes', {
  headers: { Authorization: `Bearer ${token}` },
});
const notes = await notesRes.json();
```

## Session-Tokens

Beispiel am Server: Login-Anfrage:

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
    // not authenticated
    res.status(401).send();
  }
});
```

## Session-Tokens

Beispiel am Server: Daten-Anfrage:

```js
app.get('/api/notes/:id', async (req, res) => {
  const authHeader = req.header('Authorization');
  const token = authHeader.split(' ')[1];
  const session = await authService.getSession(token);
  if (!session) {
    res.status(401).send(); // not authenticated
    return;
  }
  const note = await notesService.getNote(req.params.id);
  const role = await authService.getRole(session);
  if (role === 'user' && session.userId === note.userId) {
    res.json(note);
  } else if (role === 'admin') {
    res.json(note);
  } else {
    res.status(403).send(); // not authorized
  }
});
```

## Passwörter und Passwort-Hashes

- schlecht: Speichern von Passwörtern direkt in der Datenbank
- besser: Speichern von Passwort-Hashes
- ideal / standard: Speichern von Passwort-Hashes die "salted" und "peppered" sind

## Passwörter und Passwort-Hashes

ursprüngliche Daten:

```
name    | password
--------+--------------------
alice   | 123456
bob     | 123456
charlie | abc123
```

## Passwörter und Passwort-Hashes

Daten mit Passwort-Hashes:

```
name    | password hash
--------+---------------------------------
Alice   | e10adc3949ba59abbe56e057f20f883e
Bob     | e10adc3949ba59abbe56e057f20f883e
Charlie | e99a18c428cb38d5f260853678922e03
```

## Passwörter und Passwort-Hashes

Hashing-Algorithmen - sortiert von _am sichersten_ zu _nicht sicher_:

- Argon2
- scrypt
- bcrypt
- PBKDF2
- MD5
