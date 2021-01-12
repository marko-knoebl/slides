# Pytest

## Pytest

testing library with a simple interface, based on `assert`

```
pip install pytest
```

## Pytest

test file that works with pytest:

```py
# insertion_sort_test.py
from insertion_sort import insertion_sort

def test_insertion_sort():
    assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
    assert insertion_sort([1, 1, 1]) == [1, 1, 1]
    assert insertion_sort([]) == []
```

finding and running tests:

```bash
python -m pytest
```

## Report

```
=================== test session starts ===================
platform win32 -- Python 3.8.7, pytest-6.2.1, [...]
rootdir: C:\[...]
collected 1 item

insertion_sort_test.py .                             [100%]

==================== 1 passed in 0.19s ====================
```

## Test discovery

naming test files: `*_test.py` (or `test_*.py`)

naming test functions: `test*`

## Coverage reports

Determine how much of the code is covered by tests (what percentage of statements is executed during the tests):

```bash
pip install pytest-cov
```

```bash
python -m pytest -cov=.
```

example output:

```
Name                     Stmts   Miss  Cover
--------------------------------------------
insertion_sort.py           10      0   100%
insertion_sort_test.py       5      0   100%
--------------------------------------------
TOTAL                       15      0   100%
```

## Testing for exceptions

```py
import pytest

def test_no_argument_raises():
    with pytest.raises(TypeError):
        insertion_sort()
```

## Grouping

grouping tests via classes:

```py
class TestExceptions():
    def test_no_argument_raises():
        with pytest.raises(TypeError):
            insertion_sort()

    def test_different_types_raises():
        with pytest.raises(TypeError):
            insertion_sort(["a", 1])
```

## Fixtures

*fixtures* can set up conditions before running a test

```py
def test_foo(tmp_path):
    # tmp_path is a path to a temporary directory
```

built-in fixtures:

- `tmp_path`
- `capsys` (capture output to _stdout_ and _stderr_)
- ... ([see documentation](https://docs.pytest.org/en/stable/fixture.html))

## Resources

- [pytest: Installation and Getting Started](https://docs.pytest.org/en/stable/getting-started.html#run-multiple-tests)
- [documentation](https://docs.pytest.org/)
