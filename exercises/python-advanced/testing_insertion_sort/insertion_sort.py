def insertion_sort(unsorted):
    """Return a sorted version of a list.

    >>> insertion_sort([3, 2, 4, 1, 5])
    [1, 2, 3, 4, 5]
    """
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
