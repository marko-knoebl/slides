# None

## None

`None` ist ein Singleton:

- es gibt immer nur ein `None`-Objekt innerhalb eines laufenden Python-Programms
- mehrere Variablen können auf dieses Objekt verweisen

## Vergleich mit "is"

Das Schlüsselwort `is` vergleicht in Python, ob sich zwei Referenzen / Namen auf das gleiche Objekt beziehen.

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

Nachdem `None` ein Singleton ist, kann darauf mit `is None` getestet werden.

```py
if a is None:
    ...
```
