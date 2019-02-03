# Funktionen - Fortgeschritten

## Lambdas

## Reine Funktionen

## Memoisation

(Beispiel: Fibonacci)

## Decorators

Decorator: Möglichkeit, eine Funktion nach deren Erstellung zu verändern

Der Decorator ist eine Funktion, die eine Funktion als Parameter übernimmt und eine neue, veränderte Funktion zurückgibt

## Decorators

```py
@cache
def fib(n):
    ...
```

äquivalent zu:

```py
def fib(n):
    ...

fib = cache(fib)
```

## Functools

## Functools - Beispiel

```py
from functools import partial
open_utf8 = partial(open, encoding='UTF-8')
```
