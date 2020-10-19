# set & frozenset

## set & frozenset

Set: Unordered collection of elements with no duplicates

Frozenset: immutable set

```py
ingredients = {"flour", "water", "salt", "yeast"}
ingredients = set(["flour", "water", "salt", "yeast"])
ingredients = frozenset(["flour", "water", "salt", "yeast"])
```

## set

Sets can be an alternative for Lists if the order is not relevant.

```py
ingredients1 = {"flour", "water", "salt", "yeast"}
ingredients2 = {"water", "salt", "flour", "yeast"}
ingredients1 == ingredients2 # True
```

## set

Take care: An empty set must always be created via `set()`

Why does `{}` not produce an empty set?

## Operations on sets

```py
x = set('abc')
y = set('aeiou')
x | y
x & y
x - y
x <= y
```

## Example: Neighboring countries in North America

```py
countries = {
    "Canada", "USA", "Mexico", "Guatemala", "Belize",
    "El Salvador", "Honduras", "Nicaragua", "Costa Rica",
    "Panama"}

neighbors = [
    {"Canada", "USA"},
    {"USA", "Mexico"},
    {"Mexico", "Guatemala"},
    {"Mexico", "Belize"},
    {"Guatemala", "Belize"},
    {"Guatemala", "El Salvador"},
    {"Guatemala", "Honduras"},
    {"Honduras", "Nicaragua"},
    {"Nicaragua", "Costa Rica"},
    {"Costa Rica", "Panama"}
]
```

## Task: Find the "route" from any country to another
