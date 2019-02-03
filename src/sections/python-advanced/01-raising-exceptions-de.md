# Exceptions auslösen

## Exceptions auslösen

```py
raise ValueError('test')
```

## Eigene Exceptions

Eigene exceptions können wir als Unterklassen von `Exception` definieren

```py
class MoneyParseException(Exception):
    pass

raise MoneyParseException()
```
