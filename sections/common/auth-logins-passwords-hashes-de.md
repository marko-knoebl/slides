# Logins, Passwörter und Hashes

## Logins, Passwörter und Hashes

Facebook kennt dein Facebook-Passwort _nicht_!

## Logins, Passwörter und Hashes

Eine Website sollte nie direkt Passwörter abspeichern

Stattdessen: Eine Variante des Passworts speichern, die _hashed_ und _salted_ ist

## Logins, Passwörter und Hashes

Daten in Klartext:

```
name    | password
--------+--------------------
Alice   | 123456
Bob     | 123456
Charlie | abc123
Dave    | correcthorsebattery
```

## Logins, Passwörter und Hashes

Daten mit Passwort-Hashes:

```
name    | password hash
--------+---------------------------------
Alice   | e10adc3949ba59abbe56e057f20f883e
Bob     | e10adc3949ba59abbe56e057f20f883e
Charlie | e99a18c428cb38d5f260853678922e03
Dave    | 3c077829151f03a4101bf36510d551b1
```

## Logins, Passwörter und Hashes

Daten mit Hashes und Salts

```
name    | salt     | hash
--------+----------+---------------------------------
Alice   | BzrYZGvv | c17dff0de6bbdfd0c8e7c2f35f2f74b0
Bob     | w6hxMeFz | 107b7047ae12bd19ca64f34b49fa1c98
Charlie | uOqA9bpX | c087747abdda0dc67ae9f31871692453
Dave    | nf7ExQnd | cd6bc62d87ad35d6ea4cbe83e89536f7
```

Für Alice werden der _Salt_ ("BzrYZGvv") und der Hash von "123456-BzrYZGvv" gespeichert

## Algorithmen

Sortiert von _am sichersten_ zu _nicht sicher_:

- Argon2
- scrypt
- bcrypt
- PBKDF2
- MD5

MD5 ist _nicht sicher_, wird aber der Einfachheit halber in diesen Beispielen verwendet

## Passwort-Hashes

Hash = Abgeleiteter Wert, der anstatt eines Passworts gespeichert werden kann

Beispiele für MD5-Hashes (unsicher) in Hex-Notation:

- `123456` → `e10adc3949ba59abbe56e057f20f883e`
- `abc123` → `e99a18c428cb38d5f260853678922e03`

## Passwort-Hashes

Registrierung von Benutzern:

Benutzer sendet Passwort (z.B. `123456`), Server speichert den Passwort-Hash (z.B. `e10adc3949ba59abbe56e057f20f883e`)

Login von Benutzern:

Benutzer sendet Passwort, Server berechnet dessen Hash und vergleicht diesen zum gespeicherten Passwort-Hash

## Salts

Zusätzliche Sicherheit: Passwörter werden nicht direkt gehashed, sondern zuvor mit zusätzlichen Zufallsdaten ergänzt

Würden Passwörter ohne Salt gehashed werden, wäre es z.B. einfach, Hashes von viel verwendeten oder einfachen Passwörtern zu erkennen

## Beispielhafter Prozess

basierend auf MD5 (unsicher):

Account-Erstellung:

- Registrierungs-Request mit Daten: Benutzername `alice`, Passwort `123456`
- Passwort mit zufälligem Suffix (Salt): `123456-BzrYZGvv`
- Hash dieses Strings: `c17dff0de6bbdfd0c8e7c2f35f2f74b0`
- Neuer Datenbankeintrag mit drei Feldern:
  - `alice`
  - `BzrYZGvv`
  - `c17dff0de6bbdfd0c8e7c2f35f2f74b0`

## Beispielhafter Prozess

basierend auf MD5 (unsicher):

Login-Versuch (nicht erfolgreich):

- Login-Request: Benutzername `alice`, Passwort `111111`
- Lesen des Salts von `alice` aus der Datenbank: `BzrYZGvv`
- Passwort-String mit Salt: `111111-BzrYZGvv`
- Hash dieses Strings: `c42f4b80513e7aee0ff1c5b7ebe339e0`
- Vergleich mit dem gespeicherten Hash (`c17dff0de6bbdfd0c8e7c2f35f2f74b0`)
- Hashes passen nicht - Loginversuch abgelehnt
