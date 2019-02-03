# Objektorientierung (Fortgeschritten)

## Private Attribute und Methoden und Python-Philosophie

Kennzeichnung von Attributen, die von außen nicht verwendet werden sollten mit `_`

We're all consenting adults here: https://mail.python.org/pipermail/tutor/2003-October/025932.html

Achtung: oft Fehlinformation bezüglich `__`! In der Praxis sollten doppelte Unterstriche kaum verwendet werden.

## Instanzattribute und Slots

Generell können beliebige Attribute festgesetzt werden:

```py
a.value = 3
```

Um den Speicherverbrauch zu verringern, können in einer Klasse sogenannte "slots" definiert werden:

```py
class Money():
    __slots__ = ['currency', 'amount']
```

## Klassenattribute

sind Attribute, die nur auf der Klasse (nicht auf jeder Instanz) definiert sind - alle Instanzen teilen sich die Attribute

## Klassenattribute: Beispiel

`_exchange_rates = {'EUR': 1, 'USD': 0.85, 'GBP': 1.4}`

## Getters & Setters

Beispiel: `a.set_currency('EUR')`

## Properties

Alternative zu Getters & Setters

```py
def _get_currency(self):
    return self._currency

def _set_currency(self, currency):
    rates = type(self)._exchange_rates
    factor = rates[self._currency] / rates[currency]
    self._currency = currency
    self.amount *= factor

currency = property(_get_currency, _set_currency)
```

## Magic Methods

Besondere Methoden, die das Verhalten einer Klasse beeinflussen

- `__str__`
- `__repr__`

## Magic Methods

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Statische Methoden, Klassenmethoden und Decorators

_Klassenmethoden_: Methoden, die nicht auf eine bestimmte Instanz zugreifen müssen, sondern auf die Klasse

_Statische Methoden_: Methoden, die weder auf eine Instanz noch Klasse zugreifen müssen

## Beispiel Klassenmethode

```py
Money.from_string('23.40 EUR')
```

## Definition von statischen und Klassenmethoden

```py
@classmethod
def from_string(cls, inputstring):
    ...
```

## Unterklassen und Vererbungsreihenfolge

## super()

Proxy zu den Elternklassen

## super()

ohne super:

```py
class Child(A, B):
    def __init__(self):
        A.__init__(self)
        B.__init__(self)
```

## super()

Python 2:

```py
class Child(A, B):
    def __init__(self):
        super(Child, self).__init__()
```

Python 3:

```py
class Child(A, B):
    def __init__(self):
        super().__init__()
```

## Klassendekoration

```py
@logattraccess
class Foo():
    def __init__(self):
        self.a = 3

f = Foo()

f.a # prints: "get property 'a'"
f.b = 3 # prints: "set propery 'b'"
```

## Übungen

- Buch 10.11.4 (Laenge)
- Klasse "Vector"
- Klasse "BankAccount"
- Klasse "Dictionary" (Wörterbuch)
