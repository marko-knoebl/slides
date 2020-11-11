# Operationen auf Arrays

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a1d[0] # 1
a2d[0, 1] # 2
a2d[0, :] # [1, 2, 3]
a2d[:, 0] # [1, 4, 7]
```

bei 2D-Arrays: _[Zeilenindex, Spaltenindex]_

im Allgemeinen:

- vorletzter Index (sofern er existiert): zählt richtung unten
- letzter Index: zählt rightung rechts

## Operationen auf Arrays

Auswählen von Einträgen:

```py
a2d[0] # [1, 2, 3]
```

```py
a2d[1:, 1:] # [[5, 6], [8, 9]]
a2d[1, ::-1] # [6, 5, 4]
```

## Operationen auf Arrays

Operatoren werden elementweise angewendet:

```py
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

print(-a)
# np.array([-1, -2, -3])
print(a + b)
# np.array([3, 4, 5])
print(a * b)
# np.array([2, 4, 6])
```

## Operationen auf Arrays

Auch mit einzelnen Zahlen möglich (broadcasting):

```py
a = np.array([1, 2, 3])

print(a + 1)
# np.array([2, 3, 4])
```

Einige Konstanten sind direkt in NumPy verfügbar:

```py
print(a + np.pi)
print(a + np.e)
print(np.nan)
```

## Operationen auf Arrays

Elementweises Vergleichen von Arrays:

```py
a < b
# np.array([True, False, False])
a == b
# np.array([False, True, False])
```

Achtung: `a == b` kann nicht sinnvoll in if-Abfragen verwendet werden - verwende `np.array_equal(a, b)`.

## Operationen auf Arrays

Filtern von Arrays (z.B. beschränken auf positive Einträge):

```py
a = np.array([-1, 3, -2, 1])
a_is_pos = a > 0
# array([False, True, False, True])
a_pos = a[a_is_pos]
# array([3, 1])
```

Kurzform:

```py
a_pos = a[a > 0]
```

## Operationen auf Arrays

NumPy bietet spezielle Funktionen, die elementweise angewendet werden:

```py
a = np.array([0, 1, 2, 3])

print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Operationen auf Arrays

Elementweise Funktionen:

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- ...

## Operationen auf Arrays

_Aggregationen_ berechnen beispielsweise Werte zu jeder Zeile / jeder Spalte oder zu einem ganzen Array

Gesamtsumme:

```py
np.sum(a2d)
```

Summe entlang Achse 0 ("vertikal")

```py
np.sum(a2d, axis=0)
```

Summe entlang Achse 1 ("horizontal")

```py
np.sum(a2d, axis=1)
```

## Operationen auf Arrays

Aggregationen:

- `sum`
- `min`
- `max`
- `std`
- `percentile`

## Übungen

(siehe nächste Slides)

- Preise und Mengen -> Gesamtpreis
- Schwerpunkt eines Dreiecks
- Sinus- und Kosinusfunktion - Wertetabelle

## Übungen

Gegeben sind ein Array von Preisen und ein Array von gekauften Mengen. Bestimme den Gesamtpreis:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

## Übungen

Gegeben sind die Koordinaten von Eckpunkten eines Dreiecks (2D oder 3D). Bestimme den Schwerpunkt (arithmetisches Mittel der Eckpunkte).

```py
a = np.array([5, 1])
b = np.array([6, 8])
c = np.array([1, 3])

# solution: [4, 4]
```

## Übungen

Erstelle eine Wertetabelle für Sinus- und Kosinusfunktion im Intervall von 0 bis 2\*pi.

Resultat:

```py
# x, sin(x), cos(x)
np.array([[0.0, 0.01, 0.02, ...],
          [0.0, 0.0099998, 0.99995, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

Überprüfe anhand der Daten, ob näherungsweise gilt: _sin(x)^2 + cos(x)^2 = 1_
