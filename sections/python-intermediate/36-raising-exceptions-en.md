# Raising exceptions

## Raising exceptions

```py
raise ValueError('test')
```

## Re-raising caught exceptions

```py
try:
    ...
except ClientError as e
    if "DryRunOperation" not in str(e):
        raise
```

## Custom exceptions

We can define custom exceptions as subclasses of other exception classes:

```py
class MoneyParseException(Exception):
    pass

raise MoneyParseException()
```
