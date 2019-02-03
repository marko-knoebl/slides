# QA & Testen

## logging

## logging

```py
import logging
logging.basicConfig(
    filename="sort.log",
    level=logging.DEBUG,
    filemode="w"
)

logging.debug("hello")
```

## logging

Beispiel: Sortieralgorithmus

## assert

## doctests

## doctests

Codebeispiele und unittests in einem - innerhalb der docstrings

## doctests

```py
def add(a, b):
    """Add two numbers.

    >>> add(2, 3)
    5
    """
```

## doctests ausführen

```py
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## doctests: lange Ausgaben

```py
"""
>>> bubblesort(list(range(10))) #doctest: +NORMALIZE_WHITESPACE
[0, 1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> bubblesort(list(range(10))) #doctest: +ELLIPSIS
[0, 1, 2, ..., 8, 9]
"""
```

## Unittests

Möglichkeiten

- unittest (Standardlibrary)
- pytest
- nose

## unittest

## unittest

test_tictactoe.py

```py
import unittest
from tictactoe import has_won

class HasWon(unittest.TestCase):
    def test_has_won_first_row_x(self):
        board = [["X", "X", "X"],
                 [None, None, None],
                 [None, None, None]]
        w = has_won(board, "X")
        self.assertTrue(w)
```

## unittest

Ausführen:

```bash
python -m unittest mymodule
```

oder

```bash
python -m unittest
```

(findet Tests im Ordner)

## debugger
