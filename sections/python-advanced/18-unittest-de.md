# Unittest

## Unittest

_unittest_: Testpaket in der Standardlibrary

oft wird stattdessen _pytest_ empfohlen

## Test discovery

```bash
python -m unittest
```

Sucht nach dem Namensschema `test_*.py*`

Bemerkung: Unterordner mit Tests müssen eine datei namens _\_\_init\_\_.py_ beinhalten (siehe https://bugs.python.org/issue35617)

nach einem anderen Schema suchen:

```bash
python -m unittest discover -p "*_test.py"
```

## Schreiben von Tests

```py
# insertion_sort_test.py
import unittest

import insertion_sort

class InsertionSort(unittest.TestCase):
    def test_five_items(self):
        input = [3, 2, 4, 1, 5]
        expected = [1, 2, 3, 4, 5]
        actual = insertion_sort.insertion_sort(input)
        self.assertEqual(actual, expected)

    def test_empty(self):
        actual = insertion_sort.insertion_sort([])
        self.assertEqual(actual, [])
```

## Assertions

Assertions:

- `.assertEqual(a, 3)`
- `.assertTrue(b)`
- `.assertFalse(c)`
- `.assertIsNone(d)`
- `.assertIn(a, [2, 3, 4])`
- `.assertIsInstance(a, int)`
- `.assertRaises(TypeError, len)`
- ...

es gibt auch gegenteilige Assertions, z.B. `.assertNotEqual(a, 3)`

## setUp and tearDown

Definieren von Funktionen, die vor / nach jedem Test ausgeführt werden:

```py
import unittest

class WidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.widget = Widget('The widget')

    def tearDown(self):
        self.widget.dispose()
```

## Testabdeckung

PIP-Paket _coverage_

ausführen:

```bash
python -m coverage run test_shorten.py
python -m coverage report
```

mögliche Ausgabe:

```
Name              Stmts   Miss  Cover
-------------------------------------
shorten.py            4      0   100%
test_shorten.py      11      0   100%
-------------------------------------
TOTAL                15      0   100%
```

## Ausführen von Doctests

```py
# insertion_sort_test.py
import doctest

import insertion_sort

def load_tests(loader, tests, ignore):
    tests.addTests(doctest.DocTestSuite(insertion_sort))
    return tests
```
