# Logging: insertion sort

this is an implementation of an insertion sort:

```py
def insertion_sort(unsorted):
    sorted = []
    for new_item in unsorted:
        i = 0
        for sorted_item in sorted:
            if new_item > sorted_item:
                i += 1
            else:
                break
        sorted.insert(i, new_item)
    return sorted
```

add some logging to it to inspect how the process works
