# Funktionen - Fortgeschritten

## Lambdas

Definieren einer Lambda-Funktion (anonymen Funktion):

```py
multiply = lambda a, b: a * b
```

## Lambdas

Verwenden eines Lambdas zum Sortieren:

```py
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
```

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

## Memoisation

Strategie zur Performanceoptimierung:

Die Rückgabewerte bisheriger Funktionsaufrufe werden gespeichert und bei erneutem Aufruf mit den gleichen Parameterwerten wiederverwendet

(Beispiel: Fibonacci)
