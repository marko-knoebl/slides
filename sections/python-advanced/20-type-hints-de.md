# Type Hints

## Type Hints

Neuere Versionen von Python unterstützen optionale Typenannotationen

Typenannotationen können die IDE - z.B. durch das Bereitstellen zusätzlicher Fehlermeldungen

## Typechecker

- pyright
- mypy

VS Code Extensions für beide verfügbar

## Variablen

Variablen:

```py
i: int = 3
```

## Funktionen

Funktionen:

```py
def double(n: int) -> int:
    return 2 * n
```

## Kollektionen

```py
from typing import List, Set, Dict, Tuple

names: List[int] = ['Anna', 'Bernd', 'Caro']
anna: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

```py
from typing import Iterable

names: Iterable[str] = ...
```
