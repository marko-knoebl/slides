# Funktionen höherer Ordnung

## Funktionen höherer Ordnung

_Funktion höherer Ordnung_ (_higher-order function_): eine Funktion, die andere Funktionen als Parameter erhalten kann und/oder eine Funktion zurückgeben kann

wir erinnern uns: "alles ist eine Objekt" in Python - so auch Funktionen

## Functools

Modul _functools_: Sammlung von Funktionen höherer Ordnung

Beispiele:

- `functools.lru_cache`
- `functools.cache` (Python 3.9)
- `functools.partial`
- `functools.reduce`

## Functools: partial

```py
from functools import partial
open_utf8 = partial(open, encoding='utf-8')
```

## Functools: Memoisierung / Caching

**Memoisierung**: Strategie zur Performanceoptimierung:

Die Rückgabewerte bisheriger Funktionsaufrufe werden gespeichert und bei erneutem Aufruf mit den gleichen Parameterwerten wiederverwendet

```py
def fibonacci(n):
    if n in [0, 1]:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# make faster by caching
fibonacci = lru_cache(fibonacci)
```

## Decorator-Syntax

Decorator-Syntax: einfache Möglichkeit, Funktionen höherer Ordnung auf Funktionsdefinitionen anzuwenden

## Decorator-Syntax

```py
@lru_cache  # Python >= 3.8
def fibonacci(n):
    ...
```

äquivalent zu:

```py
def fibonacci(n):
    ...

fibonacci = lru_cache(fibonacci)
```
