# Type hints

## Type hints

Newer Python versions support optional type hints

Type hints can support the IDE - e.g. by providing additional errors

## Type checkers

- mypy
- pyright

VS Code extensions are available

## Type hints

Variables:

```py
i: int = 3
```

## Functions

Functions:

```py
def double(n: int) -> int:
    return 2 * n
```

## Collections

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
