# Zahlen

## int

beliebig große Ganzzahlen

## int

Andere Zahlensysteme:

```py
a = 42
b = 0o52
c = 0x2a
```

```py
a = int('10010', 2)
```

## float

64-bit Gleitkommazahlen

## float

```py
a = 2.3
b = .2
c = 6e23
d = float('nan')
e = float('inf')
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

## Weitere Operationen mit Zahlen

- Division mit Rest: `10 // 3`
- Divisionsrest / Modulo: `10 % 3`
- Potenzieren: `2 ** 3`
