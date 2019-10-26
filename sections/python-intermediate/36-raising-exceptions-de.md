# Exceptions auslösen

## Exceptions auslösen

```py
raise ValueError('test')
```

## Abgefangene Exceptions erneut auslösen

```py
try:
    ...
except ClientError as e
    if "DryRunOperation" not in str(e):
        raise
```

## Eigene Exceptions

Eigene Exceptions können wir als Unterklassen von `Exception` definieren

```py
class MoneyParseException(Exception):
    pass

raise MoneyParseException()
```
