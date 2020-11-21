import logging

logging.basicConfig(
    filename="logging_insertion_sort.log",
    filemode="w",
    level=logging.DEBUG,
)


def insertion_sort(unsorted):
    sorted = []
    for new_item in unsorted:
        i = 0
        for sorted_item in sorted:
            if new_item > sorted_item:
                i += 1
            else:
                break
        logging.debug(new_item)
        logging.debug(i)
        sorted.insert(i, new_item)
        logging.debug(sorted)
    return sorted


insertion_sort([2, 3, 1, 5, 4])