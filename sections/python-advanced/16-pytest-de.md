# Pytest

## Pytest

Test-Library mit einfachem Interface, basierend auf `assert`

```
pip install pytest
```

## Pytest

Testdatei für pytest:

```py
# insertion_sort_test.py
from insertion_sort import insertion_sort

def test_insertion_sort():
    assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
    assert insertion_sort([1, 1, 1]) == [1, 1, 1]
    assert insertion_sort([]) == []
```

Finden und Ausführen von Tests:

```bash
python -m pytest
```

## Bericht

```
=================== test session starts ===================
platform win32 -- Python 3.8.7, pytest-6.2.1, [...]
rootdir: C:\[...]
collected 1 item

insertion_sort_test.py .                             [100%]

==================== 1 passed in 0.19s ====================
```

## Test discovery

Namensgebung für Dateien: `*_test.py` (oder `test_*.py`)

Namensgebung für Funktionen: `test*`

## Abdeckung

Bestimmen, wie viel des Codes von Tests abgedeckt ist (welcher Anteil an Statements wird ausgeführt):

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

## Testen von Exceptions

```py
import pytest

def test_no_argument_raises():
    with pytest.raises(TypeError):
        insertion_sort()
```

## Gruppierung

Gruppieren von Tests via Klassen:

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

_Fixtures_ können bestimmte Bedingungen vor dem durchführen eines Tests herstellen

```py
def test_foo(tmp_path):
    # tmp_path is a path to a temporary directory
```

verfügbare Fixtures:

- `tmp_path`
- `capsys` (überwacht Output in _stdout_ und _stderr_)
- ... ([siehe Dokumentation](https://docs.pytest.org/en/stable/fixture.html))

## Ressourcen

- [pytest: Installation and Getting Started](https://docs.pytest.org/en/stable/getting-started.html#run-multiple-tests)
- [pytest Dokumentation](https://docs.pytest.org/)
