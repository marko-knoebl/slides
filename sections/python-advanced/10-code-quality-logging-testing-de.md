# QA & Testen

## Logging

## Logging

```py
import logging
logging.basicConfig(
    filename="sort.log",
    level=logging.DEBUG,
    filemode="w"
)

logging.debug("hello")
```

## Logging

Beispiel: Sortieralgorithmus

## Assert

## Doctests

Codebeispiele und unittests in einem - innerhalb der docstrings

## Doctests

```py
def add(a, b):
    """Add two numbers.

    >>> add(2, 3)
    5
    """
```

## Doctests ausführen

```py
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## Doctests: lange Ausgaben

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

Möglichkeiten:

- unittest (Standardlibrary)
- pytest
- nose

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

if __name__ == "__main__":
    unittest.main()
```

## unittest

Ausführen aller Tests in Dateien mit dem Dateinamen _test\*.py_:

```bash
python -m unittest
```

Tests mit anderem Muster:

```bash
python -m unittest discover -p "*_test.py"
```

Achtung: um erkannt zu werden, müssen Pakete eine _\_\_init\_\_.py_ Datei enthalten (siehe https://bugs.python.org/issue35617)

## unittest - Assertions

mögliche Assertions:

- `.assertEqual(a, 3)`
- `.assertTrue(b)`
- `.assertFalse(c)`
- `.assertIsNone(d)`
- `.assertIn(a, [2, 3, 4])`
- `.assertIsInstance(a, int)`
- `.assertRaises(TypeError, len)`
- ...

es existieren auch gegenteilige Assertions, z.B. `.assertNotEqual(a, 3)`

## unittest - setUp und tearDown

Definieren von Funktionen, die vor / nach jedem Test ausgeführt werden:

```py
import unittest

class WidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.widget = Widget('The widget')

    def tearDown(self):
        self.widget.dispose()
```

## unittest - Testabdeckung

PIP-Paket _coverage_

Ausführung:

```bash
coverage run test_shorten.py
coverage report
```

Beispiel zur Ausgabe:

```
Name              Stmts   Miss  Cover
-------------------------------------
shorten.py            4      0   100%
test_shorten.py      11      0   100%
-------------------------------------
TOTAL                15      0   100%
```
