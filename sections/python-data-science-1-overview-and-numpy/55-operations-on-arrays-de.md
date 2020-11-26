# Operationen auf Arrays

## Operatoren

Operatoren werden elementweise angewendet:

```py
a = np.array([0, 1, 2, 3])
b = np.array([2, 2, 2, 2])

-a
# np.array([0, -1, -2, -3])
a + b
# np.array([2, 3, 4, 5])
a * b
# np.array([0, 2, 4, 6])
```

## Vergleiche

Elementweises Vergleichen von Arrays:

```py
a < b
# np.array([True, True, False, False])
a == b
# np.array([False, False, True, False])
```

Achtung: `a == b` kann nicht sinnvoll in if-Abfragen verwendet werden - verwende `np.array_equal(a, b)`.

## Operatoren

Auch mit einzelnen Zahlen möglich (broadcasting):

```py
print(a + 1)
# np.array([1, 2, 3, 4])
```

Einige Konstanten sind direkt in NumPy verfügbar:

```py
print(a + np.pi)
print(a + np.e)
print(np.nan)
```

## Elementweise Funktionen

NumPy bietet spezielle Funktionen, die elementweise angewendet werden:

```py
print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Elementweise Funktionen

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- `round`
- ...

## Aggregationen

_Aggregationen_ berechnen beispielsweise Werte zu jeder Zeile / jeder Spalte oder zu einem ganzen Array

Gesamtsumme:

```py
np.sum(a2d)
```

Summe entlang Achse 0 ("richtung unten")

```py
np.sum(a2d, axis=0)
```

Summe entlang Achse 1 ("richtung rechts")

```py
np.sum(a2d, axis=1)
```

## Aggregationen

- `sum`
- `min`
- `max`
- `std`
- `percentile`

## Übungen

(siehe nächste Slides)

- Preise und Mengen → Gesamtpreis
- kinetic energy
- Schwerpunkt eines Dreiecks
- Sinus- und Kosinusfunktion - Wertetabelle
- dice rolls

## Übungen

Gegeben sind ein Array von Preisen und ein Array von gekauften Mengen. Bestimme den Gesamtpreis:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

## Übungen

Gegeben sind die Massen und Geschwindigkeiten einiger Körper; bestimme die kinetische Energie aller einzelnen Körper und die gesamte kinetische Energie aller Körper zusammen

```py
masses = np.array([1.2, 2.2, 1.5, 2.0])
velocities = np.array([12.0, 14.0, 14.0, 7.5])
```

Formel: E = m\*v^2 / 2

## Übungen

Gegeben sind die Koordinaten von Eckpunkten eines Dreiecks. Bestimme den Schwerpunkt (arithmetisches Mittel der Eckpunkte).

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
          [0.0, 0.0099998, 0.0199999, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

Überprüfe anhand der Daten, ob näherungsweise gilt: _sin(x)^2 + cos(x)^2 = 1_

## Übungen

Simuliere 1 Million Mal würfeln mit je 10 Würfeln
