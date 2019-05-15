# None

## None

The expression `None` is for "nothing" - analogous to `null` or `undefined` in other languages.

It may be used if a certain value is unknown

```py
users = [
  ["John", "Doe", "1976-10-23"],
  ["Jane", "Doe", None]
]
```

## None

`None` is a Singleton:

- there is only ever a single instance of it inside a running Python program
- multiple variables may refer to that same instance

## Comparisons via "is"

The keyword `is` checks whether two references / names refer to the same object.

```py
a = [1, 2]
b = a
x = [1, 2]

a == b # True
a is b # True
a == x # True
a is x # False
```

## None and "is"

As `None` is a singleton we can check for it via `is None`:

```py
if a is None:
    print("a is None")
```
