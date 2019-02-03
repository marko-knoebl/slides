# Sequenzen

## Sequenzen

Objekte, die aus einer Aufreihung anderer Objekte bestehen, zB:

- Listen
- Tupel
- Strings
- Bytes

## Operationen auf Sequenzen

- Elementzugriff (via index): `s[i]`
- Zugriff auf mehrere Elemente: `s[i:j]`
- Konkatenation: `s + t`
- Wiederholung: `3 * s`
- Länge: `len(s)`
- for-Schleife: `for el in s:`
- if-Abfrage: `if el in s:`

## Liste

Eine Veränderliche Sequenz von Objekten - üblicherweise verwendet für homogene (gleichartige) Einträge

```py
users = ['mike', 'tim', 'theresa']
```

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

## Sortieren von Listen

```py
l.sort()
```

```py
l.sort(key=...)
```

## Übungen

- Aufgabe 7:3 (Mischen von Karten)
- Aufgabe 7:4 (Liste von rechtwinkligen Dreiecken)

## Tupel

Repräsentieren üblicherweise inhomogene Daten vorgegebener Länge - jeder Eintrag hat eine besondere Bedeutung

Erstellung: Einträge werden mit Kommas getrennt, üblicherweise mit runden Klammern umschlossen

Tupel sind nach der Erstellung unveränderlich

## Tupel

```py
empty_tuple = ()
single_value = ('Thomas', )
two_values = ('Thomas', 'Bauer')
two_values = 'Thomas', 'Bauer'
```

## Unpacking (von Tupeln)

```py
# Tauschen von Variablennamen

a, b = b, a
```

## Unpacking (von Tupeln)

```py
# enumerate
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

## Bytes

= Sequenz von Zahlen zwischen 0 und 255

```py
m = bytes([104, 101, 108, 108, 111])

# oder:

m = b"hello"
```

## Bytes

Können zum Teil (bis 127) als ASCII-Text dargestellt werden

## Umwandlung zwischen Strings und Bytes

Strings können jeden beliebigen Text darstellen (intern üblicherweise mittels Unicode repräsentiert)

Bytes können einen encodierten String enthalten. Dabei gilt:

Für die Bytes von 0-127 ist das Zeichen in jedem Encoding das gleiche.
Für Bytes über 128 können verschiedene Encodings verschiedene Repräsentationen liefern.

## Encodings

```py
'a'.encode('ascii')
# b'a'

'a'.encode('latin-1')
# b'a'

'a'.encode('utf-8')
# b'a'
```

## Encodings

```py
'ä'.encode('ascii')
# UnicodeEncodeError: 'ascii' codec can't encode character ...

'ä'.encode('latin-1')
# b'\xe4'

'ä'.encode('utf-8')
# b'\xc3\xa4'
```

## Beispiele

- ISBN
- IBAN
