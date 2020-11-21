import unittest
from insertion_sort import insertion_sort


class InsertionSort(unittest.TestCase):
    def test_five_items(self):
        input = [3, 2, 4, 1, 5]
        expected = [1, 2, 3, 4, 5]
        actual = insertion_sort(input)
        self.assertEqual(actual, expected)

    def test_empty(self):
        actual = insertion_sort([])
        self.assertEqual(actual, [])


if __name__ == "__main__":
    unittest.main()
