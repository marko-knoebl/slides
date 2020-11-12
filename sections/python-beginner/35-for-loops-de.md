# For-Schleifen

## For-Schleifen

Mit for-Schleifen können wir die Inhalte einer Liste (oder ähnlicher Objekte) durchlaufen.

Bezeichnung in manchen anderen Programmiersprachen: _for-each_

## For-Schleifen

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Übung: For-Schleifen und If-Statements

Beginne mit einer Liste von Zahlen, z.B. `[2, 5, -3, 8, 1, -5]`

Gib alle positiven Einträge aus, z.B. `2, 5, 8, 1`

Gib den größten Eintrag aus, z.B. `8`

## Beispiel: Login-System

<!-- might be too hard for programming beginners -->

```py
users = [
    {"name": "Alice", "password": "1234"},
    {"name": "Bob", "password": "password"},
    {"name": "Charlie", "password": "paris41"}
]
```

## Beispiel: Login-System

Beispielhafter Programmlauf:

```txt
Enter your username:
lice
No such user.
Enter your username:
Alice
Enter your password:
123
Wrong password
Enter your password:
1234
Logged in as Alice!
```
