# Automated testing

## Automated testing

why:

- make sure the code works as intended
- more easily refactor / change code without breaking anything
- document expected behavior

## Testing tools

**pytest**: testing library with a simple interface

**doctest**: checks code examples in docstrings

**unittest**: testing library that is included in the standard library

## Example: code to be tested

code to be tested:

```py
# insertion_sort.py
def insertion_sort(unsorted):
    """Return a sorted version of a list."""
    sorted = []
    for new_item in unsorted:
        i = 0
        for sorted_item in sorted:
            if new_item >= sorted_item:
                i += 1
            else:
                break
        sorted.insert(i, new_item)
    return sorted
```

## assert

_assert_: keyword that makes sure some condition is met

```py
assert isinstance(a, int)
assert a > 0
```

If the condition is not met, it will throw an _assertion error_

## Example: manual tests with assert

```py
# insertion_sort_test.py
from insertion_sort import insertion_sort

assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
assert insertion_sort([1, 1, 1]) == [1, 1, 1]
assert insertion_sort([]) == []
```

the script should run without throwing errors
