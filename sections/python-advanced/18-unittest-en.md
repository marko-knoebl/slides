# Unittest

## Unittest

_unittest_: testing package inside the standard library

often, _pytest_ is recommended over _unittest_

## Test discovery

```bash
python -m unittest
```

looks for files matching `test_*.py*`

Note: in order to be discovered all packages must contain a file named _\_\_init\_\_.py_ (see https://bugs.python.org/issue35617)

specifying a different pattern:

```bash
python -m unittest discover -p "*_test.py"
```

## Writing tests

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

assertions:

- `.assertEqual(a, 3)`
- `.assertTrue(b)`
- `.assertFalse(c)`
- `.assertIsNone(d)`
- `.assertIn(a, [2, 3, 4])`
- `.assertIsInstance(a, int)`
- `.assertRaises(TypeError, len)`
- ...

there are also contrary assertions, e.g. `.assertNotEqual(a, 3)`

## setUp and tearDown

Defining functions that are executed before / after each test:

```py
import unittest

class WidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.widget = Widget('The widget')

    def tearDown(self):
        self.widget.dispose()
```

## test coverage

PIP package _coverage_

execution:

```bash
python -m coverage run test_shorten.py
python -m coverage report
```

Example output:

```
Name              Stmts   Miss  Cover
-------------------------------------
shorten.py            4      0   100%
test_shorten.py      11      0   100%
-------------------------------------
TOTAL                15      0   100%
```

## Running doctests

```py
# insertion_sort_test.py
import doctest

import insertion_sort

def load_tests(loader, tests, ignore):
    tests.addTests(doctest.DocTestSuite(insertion_sort))
    return tests
```
