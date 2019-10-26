# OOP: Magic Methods

## Magic Methods

Magic methods are special methods that influence the behavior of a class.

They begin and end with two underscores, e.g. `__init__`

List of magic methods: https://docs.python.org/3/reference/datamodel.html#special-method-names

## Magic Methods

Methods for converting to strings:

- `__repr__`: default representation, ideally readable / interpretable by Python
- `__str__`: "nice" representation for humans, falls back to `__repr__` if not overwritten

Example:

```py
from datetime import time
a = time(23, 45)
repr(a) # 'datetime.time(23, 45)'
str(a) # '23:45:00'
```

## Magic Methods

Methods for mathematical operators:

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Magic Methods

- `__call__`
- `__getitem__`
