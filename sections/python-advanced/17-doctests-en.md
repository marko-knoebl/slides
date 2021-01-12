# Doctests

## Doctests

Code examples may be included in docstrings and may be used for testing

## Doctests

simple doctest:

```py
# insertion_sort.py
def insertion_sort(unsorted):
    """Return a sorted version of a list.

    >>> insertion_sort([3, 2, 4, 1, 5])
    [1, 2, 3, 4, 5]
    """

    # code here
```

## Running Doctests

running doctests from pytest:

```bash
python -m pytest --doctest-modules
```

## Long outputs

```py
"""
>>> insertion_sort(range(10)) #doctest: +NORMALIZE_WHITESPACE
[0, 1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> insertion_sort(range(10)) #doctest: +ELLIPSIS
[0, 1, 2, ..., 8, 9]
"""
```
