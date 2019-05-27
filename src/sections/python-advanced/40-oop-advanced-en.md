# Object-oriented programming (advanced)

## Private attributes / methods and the Python philosophy

Prefix attributes / methods which should not be used from the outside with `_`

_We're all consenting adults here_: https://mail.python.org/pipermail/tutor/2003-October/025932.html

Note: There's misinformation concerning double underscores as prefixes! In practice double underscores should almost never be used.

## Class attributes

Class attributes = attributes that are defined on a class (not on an individual instance) - all instances share these attributes

## Class attributes: example

`_exchange_rates = {'EUR': 1, 'USD': 0.85, 'GBP': 1.4}`

## Getters & setters

example:

```py
a.set_currency('EUR')
```

## Properties

Alternative to getters and setters

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

Special methods, that influence the behavior of a class

- `__str__`
- `__repr__`

## Magic Methods

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Static methods, class methods and Decorators

_class methods_: methods that don't have to access a specific instance, but need to access the class

_static methods_: methods that neither access an instance nor a class

## Example: class method

```py
Money.from_string('23.40 EUR')
```

## Defining static methods and class methods

```py
@classmethod
def from_string(cls, inputstring):
    ...
```

## Subclasses

## super()

Proxy for accessing the parent class

## super()

without super:

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

## Exercises

- Class `Vector`
- Class `BankAccount`
- Class `Dictionary`
