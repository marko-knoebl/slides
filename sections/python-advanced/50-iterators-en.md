# Iterators

## Iterables and iterators

_iterable_: an object that can be iterated over via `for element in my_iterable`

_iterator_: an lightweight iterable

## Iterables and iterators

examples of iterables:

- lists
- dicts
- range objects
- iterators

## Iterators

An _iterator_ is a lightweight iterable

possible advantages of iterators over lists:

- only create / access resources on demand
- keep memory consumption low (only one generated object is ever in memory)

## Iterators

example: `open()` returns an iterator of lines in a file

```py
with open("./wikipedia_complete.txt", encoding="utf-8") as f:
    for line in f:
        print line
```

The file could be gigabytes in size and this would still work

## Iterators

example functions:

Loads all files in _foo/_ at the same time, then iterates over them:

```py
for text in read_textfiles_as_list("./foo/"):
    print(text[:5])
```

Loads and prints text files individually - keeping memory consumption low:

```py
for text in read_textfiles_as_iterator("./foo/"):
    print(text[:5])
```

## Iterators

calls that return iterators:

- `enumerate()`
- `reversed()`
- `open()`
- `os.walk()`
- `os.scandir()`
- `map()`
- `filter()`
- functions in [itertools](https://docs.python.org/3/library/itertools.html)
- most database cursors (PEP 249)
- ...

note: `range` does not return an iterator (but a similar object)

## Itertools

[itertools](https://docs.python.org/3/library/itertools.html): module for creating iterators

- `itertools.count`
- `itertools.repeat`
- `itertools.product`
- ...

```py
from itertools import count

for i in count():
    print(i)
    if i >= 5:
        break

# 0 1 2 3 4 5
```
