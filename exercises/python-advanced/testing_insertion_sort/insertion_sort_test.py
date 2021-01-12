# run via:
# python -m pytest
# or
# python -m pytest --doctest-modules

from insertion_sort import insertion_sort


def test_insertion_sort():
    assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
    assert insertion_sort([1, 1, 1]) == [1, 1, 1]
    assert insertion_sort([]) == []
