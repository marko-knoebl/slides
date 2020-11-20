# Objektreferenzen und Mutationen

## Objektreferenzen und Mutationen

Was ist der Wert von `a` am Ende dieses Programms?

```py
a = [1, 2, 3]
b = a
b.append(4)
```

## Objektreferenzen und Mutationen

Eine Zuweisung (z.B. `b = a`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

## Objektreferenzen und Mutationen

Falls das Original erhalten bleiben soll, kann es kopiert werden oder die abgeänderte Variante basierend auf dem alten Objekt erstellt werden:

```py
a = [1, 2, 3]
# creating a new copy
b = a.copy()
# modifying b
b.append(4)
```

```py
a = [1, 2, 3]
# creating a new object b based on a
b = a + [4]
```

## Objektreferenzen und Mutationen

Manche Objekte in Python können direkt verändert (mutiert) werden - z.B. via `.append()`, `.pop()`, ...

Beispiele: `list`, `dict`

Viele einfache Objekte sind nach ihrer Erstellung unveränderlich.

Beispiele: `int`, `float`, `str`, `bool`, `tuple`
