# Listen

## Listen

Listen sind veränderliche Sequenzen von Objekten; sie werden üblicherweise verwendet, um gleichartige (homogene) Einträge abzulegen

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## Operationen auf Listen

Die folgenden Operationen klappen auch bei anderen _Sequenzen_ - z.B. Tupeln, Strings oder Bytes

- Elementzugriff (via index): `users[2]`
- Zugriff auf mehrere Elemente (Unterliste): `users[2:4]`
- Zusammensetzen: `users + users`
- Wiederholung: `3 * users`
- Länge: `len(users)`
- for-Schleife: `for user in users:`
- if-Abfrage: `if 'Tim' in users:`

## Operationen auf Listen - Mutationen

Listen können direkt verändert werden (im Gegensatz zu Tupeln, Strings):

- Anhängen: `users.append("Dan")`
- Letztes Element entfernen: `users.pop()`
- Ein Element anhand des Index entfernen: `users.pop(2)`

## Sortieren von Listen

```py
l.sort()
```

```py
l.sort(key=...)
```

## Übungen

- Mischen von Karten
- Liste von Primzahlen
