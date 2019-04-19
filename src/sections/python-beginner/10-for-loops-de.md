# For-Schleifen

## For-Schleifen

Mit for-Schleifen können wir die Inhalte einer Liste (oder ähnlicher Objekte) durchlaufen.

Bezeichnung in anderen Programmiersprachen: _for-each_

## For-Schleifen

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Beispiel: Login-System

```py
# Benutzer mit Passwörtern
users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]]
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

## Zählschleifen

Wir erinnern uns zurück: Für das Zählen verwendeten wir die Funktion `range`

Der Aufruf `range(5)` erstellt ein Objekt, das sich wie die Liste `[0, 1, 2, 3, 4]` verhält

Beispiel zur Verwendung:

```py
for i in range(5):
    print(i)
```
