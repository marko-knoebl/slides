# Typendeklarationen

## Typendeklarationen

MyPy: Typechecker für Python, insbesondere sinnvoll für Python3

https://mypy-lang.org

## Typendeklarationen

Variablen:

```py
i: int = 3
```

## Typendeklarationen

Funktionen:

```py
def double(n: int) -> int:
    return 2 * n
```

## Typendeklarationen: Kollektionen

```py
from typing import Iterable

names: Iterable[str] = ...
```

## Typendeklarationen: Kollektionen

```py
from typing import List, Set, Dict, Tuple

names: List[int] = ['Anna', 'Bernd', 'Caro']
anna: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

## Mypy - Dokumentation

https://mypy.readthedocs.io

(auch für Python 2)
