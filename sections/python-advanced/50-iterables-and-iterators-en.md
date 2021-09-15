# Iterables and iterators

## Iterables and iterators

_iterable_: an object that can be iterated over via `for element in my_iterable`

- "static iterable": item sequence is pre-defined (e.g. _list_)
- "dynamic iterable": items are generated on the fly (e.g. _range_)

## Iterables and iterators

hierarchy of iterables:

- "static iterables" (e.g. _list_, _dict_)
- "dynamic iterables" (e.g. _range_)
  - iterators (e.g. _enumerate_, _os.scandir_)
    - generators (custom-defined)

## Iterables and iterators

advantages of "dynamic iterables" / iterators:

- only create / access resources on demand
- keep memory consumption low (only one generated object is ever in memory at a time)

## Iterables and iterators

examples of "static iterables":

- list
- tuple
- dict
- string

## Iterables and iterators

examples of "dynamic iterables":

- range objects
- iterators

## Iterables and iterators

examples of iterators:

- `enumerate()`
- `reversed()`
- `open()`
- `os.walk()`
- `os.scandir()`
- `map()`
- `filter()`
- functions in _itertools_
- most database cursors (PEP 249)
- generators
- ...

## Iterables and iterators

example: `open()` returns an iterator of lines in a file

```py
with open("./wikipedia_complete.txt", encoding="utf-8") as f:
    for line in f:
        print line
```

The file could be gigabytes in size and this would still work

## Iterables and iterators

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

## Iterables and iterators

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
