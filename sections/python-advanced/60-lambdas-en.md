# Lambdas

## Lambdas

defining a lambda function (anonymous function):

```py
multiply = lambda a, b: a * b
```

## Lambdas

using a lambda for sorting:

```py
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
```
