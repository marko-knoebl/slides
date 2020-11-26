# Zahlen

## Weitere Operationen mit Zahlen

- Division mit Rest: `10 // 3`
- Divisionsrest / Modulo: `10 % 3`
- Potenzieren: `2 ** 3`

## Unterstriche in Literalen

um uns beim Lesen langer Zahlen zu helfen:

```py
earth_circumference = 40075017
earth_circumference = 40_075_017
```

## int

beliebig große Ganzzahlen

## int

Andere Zahlensysteme:

```py
a = 42 # decimal
b = 0b101010 # binary
c = 0o52 # octal
d = 0x2a # hexadecimal
```

```py
e = int('101010', 2)
```

## float

64-bit Gleitkommazahlen

```py
a = 2.3
b = .2
c = 6e23
d = float('nan')
e = float('inf')
```

## float

**Rundungsfehler**: manche Zahlen können nicht als Gleitkommazahlen dargestellt werden, sie sind immer Annäherungen

Beispiele im Dezimalsystem: 1/3, 1/7, π

Beispiele im Binärsystem (_floats_): 1/10, 1/5, 1/3, π

Beispiel: π + π ergibt `6.2`, wenn wir Dezimalzahlen mit 2 Stellen verwenden (besseres Ergebnis wäre `6.3`)

Beispiel: `0.1 + 0.2` ergibt ~ `0.30000000000000004`, wenn wir 64-bit floats verwenden

## float

```py
0.1 + 0.2 == 0.3
# False
```

```py
import math

math.isclose(0.1 + 0.2, 0.3)
# True
```

## float

_IEEE 754_: Standard für Gleitkommazahlen am Computer

wird von Python großteils umgesetzt

Ausnahme: Python löst für manche Operationen Exceptions aus, die unter dem Standard ein Ergebnis liefern würden - z.B. `1.0/0.0`

Besondere Zahlen in IEEE 754:

- `inf` und `-inf` (unendliche Werte)
- `nan` (not-a-number: undefinierter / unbekannter Wert)

## complex

```py
a = 2 + 3j
```

## Erweiterte Zuweisung

Zu binären Operatoren gibt es sogenannte _erweiterte Zuweisungen_ (_augmented assignments_):

```py
a = a + 1
```

Kurzform (erweiterte Zuweisung):

```py
a += 1
```

Weitere Formen: `-=`, `*=`, ...
