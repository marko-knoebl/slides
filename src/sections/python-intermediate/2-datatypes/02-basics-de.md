## NoneType

Der Ausdruck `None` steht in Python für "nichts" - analog zu `undefined` oder `null` in anderen Sprachen.

Er kann zB verwendet werden, wenn ein bestimmter Wert nicht bekannt ist

```py
users = [
  ["John", "Doe", "1976-10-23"],
  ["Jane", "Doe", "1974-01-20"],
  ["James", "Doe", None]
]
```

---

## NoneType

- Singleton
- Vergleich üblicherweise mit `is`

```py
a = None
if a is None:
    print("a is None")
```

`None` ist ein Singleton (es gibt nur ein einziges None-Objekt innerhalb eines laufenden Python-Programms, auf das aber viele Variablen verweisen können)

---

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

---

## Vergleich mit "is"

Nachdem `None` ein Singleton ist und daher immer auf die gleiche Instanz verweist, kann darauf mit `is None` getestet werden.

```py
if a is None:
    ...
```

---

## bool

True oder False

```py
a = True
if a:
    print('hello')
```

---

## bool

Für welche Objekte liefert `bool(x)` False?

???

Anekdote: Mitternacht (datetime.time(0, 0, 0) vor Python 3.5)

---

## int

beliebig große Ganzzahlen

---

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

---

## float

64-bit Gleitkommazahlen

---

## float

```py
a = 2.3
b = .2
c = 6e23
d = float('nan')
e = float('inf')
```

???

Anekdote: `d != d`

---

## complex

```py
a = 2 + 3j
```

---

## weitere Operationen mit Zahlen

- Division mit Rest: `10 // 3`
- Divisionsrest / Modulo: `10 % 3`
- Potenzieren: `2 ** 3`

---

## Strings

Strings sind Zeichenfolgen, die jedes Unicodezeichen repräsentieren können
