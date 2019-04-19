# None

## None

Der Ausdruck `None` steht in Python für "nichts" - analog zu `undefined` oder `null` in anderen Sprachen.

Er kann zB verwendet werden, wenn ein bestimmter Wert nicht bekannt ist

```py
users = [
  ["John", "Doe", "1976-10-23"],
  ["Jane", "Doe", "1974-01-20"],
  ["James", "Doe", None]
]
```

## None

- Singleton
- Vergleich üblicherweise mit `is`

```py
a = None
if a is None:
    print("a is None")
```

`None` ist ein Singleton (es gibt nur ein einziges None-Objekt innerhalb eines laufenden Python-Programms, auf das aber viele Variablen verweisen können)

## Vergleich mit "is"

Das Schlüsselwort `is` vergleicht in Python, ob sich zwei Referenzen / Namen auf das gleiche Objekt beziehen.

Beispiel:

```py
a = [1, 2]
b = a
x = [1, 2]

a == b # True
a is b # True
a == x # True
a is x # False
```

## Vergleich mit "is"

Nachdem `None` ein Singleton ist und daher immer auf die gleiche Instanz verweist, kann darauf mit `is None` getestet werden.

```py
if a is None:
    ...
```
