# Tuples

## Tuples

```py
person = ("Thomas", "Smith", "1972-03-15")
```

- similar to lists
- used to represent inhomogenous data of a predefined structure - each entry has a specific meaning
- immutable (unchangeable)

## Tuples

Each entry in a tuple has a specific meaning

Alternative data structures with named entries:

- `dict`
- `NamedTuple`

## Creating tuples

```py
empty_tuple = ()
single_value = ('Thomas', )
two_values = ('Thomas', 'Smith')
two_values = 'Thomas', 'Smith'
```

## Unpacking (of tuples)

swapping variables:

```py
a, b = b, a
```

## Unpacking (of tuples)

enumerating list items:

```py
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

Enumerate returns the following data structure:

```py
[(0, 'Alice'), (1, 'Bob'), (2, 'Charlie')]
```
