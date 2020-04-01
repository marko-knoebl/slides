# Sessions und Tokens

## Sessions und Tokens

Üblicher Prozess:

Wenn ein Benutzer sich erfolgreich eingeloggt hat erhält dieser ein geheimes Token, dass ihn für eine gewisse Zeit identifiziert (z.B. für 30 Minuten oder für 1 Tag)

## Sessions und Tokens

Inhalte von Tokens:

Variante A: Token enthält eine eindeutige Session-ID; zugehörige Session-Daten werden auf dem Server gespeichert

Variante B: Token enthält alle Session-Daten, signiert durch ein Authorisierungs-Service

## JSON Web Tokens

JSON Web Tokens (JWT) ermöglichen es einem Benutzer, sich gegenüber einer Website zu identifizieren

## JSON Web Tokens

Beispiel für Inhalte eines JWTs (3 Teile: Algorithmus, Daten, Signatur):

```json
{ "alg": "RS256" }
```

```json
{
  "iss": "google.com",
  "sub": "alice@gmail.com",
  "aud": "medium.com",
  "exp": 1577836800
}
```

```txt
eyJzdWIiOiJhbGljZSIsImlzcyI6ImF1dGguZ...
```

## JSON Web Tokens

Übersetzung:

```txt
Dies ist eine JSON Web Token, signiert mit RS256
(RSA Signatur mit SHA-256)

Wir (google.com) bestätigen, dass der Besitzer dieses
Tokens als "alice@gmail.com" bei uns eingeloggt ist.
Diese Bestätigung ist für Nutzung auf medium.com gedacht.
Diese Bestätigung ist gültig bis 2020-01-01 00:00.

Signatur: ...
```
