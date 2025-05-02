# Authentifizierung und Authorisierung: Theorie

## Authentifizierung und Authorisierung: Theorie

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
