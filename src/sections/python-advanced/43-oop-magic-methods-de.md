# OOP: Magic Methods

## Magic Methods

Besondere Methoden, die das Verhalten einer Klasse beeinflussen

Beginnen und enden mit zwei Unterstrichen, z.B. `__init__`

Liste von magic Methods: https://docs.python.org/3/reference/datamodel.html#special-method-names

## Magic Methods

Methoden zur Umwandlung in Strings:

- `__repr__`: möglichst vollständige Informationen zum Objekt, idealerweise von Python interpretierbar
- `__str__`: "schön" zu lesen

Beispiel:

```py
from datetime import time
a = time(23, 45)
repr(a) # 'datetime.time(23, 45)'
str(a) # '23:45:00'
```

## Magic Methods

Methoden für mathematische Operatoren:

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Magic Methods

- `__call__`
- `__getitem__`
