# Doctests

## Doctests

Codebeispiele können in Docstrings beinhaltet sein und zum Testen verwendet werden

## Doctests

einfacher Doctest:

```py
# insertion_sort.py
def insertion_sort(unsorted):
    """Return a sorted version of a list.

    >>> insertion_sort([3, 2, 4, 1, 5])
    [1, 2, 3, 4, 5]
    """

    # code here
```

## Ausführen von Doctests

Ausführen von Doctests aus pytest:

```bash
python -m pytest --doctest-modules
```

## Lange Ausgaben

```py
"""
>>> insertion_sort(range(10)) #doctest: +NORMALIZE_WHITESPACE
[0, 1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> insertion_sort(range(10)) #doctest: +ELLIPSIS
[0, 1, 2, ..., 8, 9]
"""
```
