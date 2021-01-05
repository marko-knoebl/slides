# Scrabble solver

Create a scrabble solver that generates a list of possible scrabble words given an iterable of available characters.

You can create a text file of English words at <http://app.aspell.net/create> (use a small SCOWL size, e.g. 10)

example interface:

```py
s = ScrabbleSolver()

s.solve("ailqtuyz")
# ['quality', 'lazy', 'quit', 'lay', 'at', 'it', 'I', 'a']
```
