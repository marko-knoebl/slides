# Sequenzen

## Sequenzen

Sequenzen sind Objekte, die aus einer Aufreihung anderer Objekte bestehen, z.B.:

- Listen
- Tupel
- Strings
- Bytes

## Operationen auf Sequenzen

- Elementzugriff (via index): `s[2]`
- Zugriff auf mehrere Elemente: `s[2:4]`
- Konkatenation: `s + t`
- Wiederholung: `3 * s`
- Länge: `len(s)`
- for-Schleife: `for el in s:`
- if-Abfrage: `if el in s:`

## Operationen auf Sequenzen

Elementzugriff

```py
users = ['mike', 'tim', 'theresa']

users[0] # 'mike'
users[-1] # 'theresa'
```

## Operationen auf Sequenzen

Änderung von Elementen (falls Sequenz veränderlich ist)

```py
users = ['mike', 'tim', 'theresa']

users[0] = 'molly'
```

## Operationen auf Sequenzen

Zugriff auf mehrere Elemente

```py
users = ['mike', 'tim', 'theresa']

users[0:2] # ['mike', 'tim']
```

## Operationen auf Sequenzen

Konkatenation

```py
users = ['mike', 'tim', 'theresa']

new_users = users + ['tina', 'michelle']
```

## Operationen auf Sequenzen

Wiederholung

```py
users = ['mike', 'tim', 'theresa']

new_users = users * 3
```

## Operationen auf Sequenzen

Länge

```py
users = ['mike', 'tim', 'theresa']

print(len(users))
```

## Operationen auf Sequenzen

for-Schleife

```py
users = ['mike', 'tim', 'theresa']

for user in users:
    print(user.upper())
```
