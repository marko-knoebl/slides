import unittest
from shorten import shorten


class Shorten(unittest.TestCase):
    def test_loremipsum_unchanged(self):
        shortened = shorten("loremipsum", 10)
        self.assertEqual(shortened, "loremipsum")

    def test_loremipsum_lor(self):
        shortened = shorten("loremipsum", 6)
        self.assertEqual(shortened, "lor...")


if __name__ == "__main__":
    unittest.main()
