# Static typing

## Static typing

Newer Python versions support optional type annotations

MyPy: type checker for Python that makes use of type annotations

https://mypy-lang.org

## Type declarations

Variables:

```py
i: int = 3
```

## Type declarations

Functions:

```py
def double(n: int) -> int:
    return 2 * n
```

## Type declarations

collections:

```py
from typing import Iterable

names: Iterable[str] = ...
```

## Type declarations

collections:

```py
from typing import List, Set, Dict, Tuple

names: List[int] = ['Anna', 'Bernd', 'Caro']
anna: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

## Mypy documentation

https://mypy.readthedocs.io
