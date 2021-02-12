# Type hints

## Type hints

Newer Python versions support optional type hints

Type hints can support the IDE - e.g. by providing additional errors

## Type checkers

- pyright (used by VS Code extension _pylance_)
- mypy

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

names: List[str] = ['Anna', 'Bernd', 'Caro']
person: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman_numerals: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

```py
from typing import Iterable

names: Iterable[str] = ...
```
