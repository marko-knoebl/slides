# Generator functions and generator expressions

## Generator functions and generator expressions

_Generator functions_ and _generator expressions_ are two ways to define custom iterators

## Generator functions

A function can contain a `yield` statement instead of a `return` statement - this makes it a generator

```py
def count():
    i = 0
    while True:
        yield i
        i += i
```

A generator function can be repeatedly exited (via `yield`) and entered again (by requesting the next value)

## Exercise: reading text files in a folder

create an iterator that returns the string contents of all UTF-8 text files in a directory

usage:

```py
for content in read_textfiles("."):
    print(content[:10])
```

## Exercise: reading text files in a folder

solution:

```py
def read_textfiles(path="."):
    for file in os.listdir(path):
        try:
            with open(path + "/" + file) as fobj:
                yield fobj.read()
            except:
                pass
```

## Generator expressions

Generator _expressions_ are similar to list comprehensions

list comprehension:

```py
mylist = [i*i for i in range(3)]
```

generator expression:

```py
mygenerator = (i*i for i in range(3))
```

## Generator expressions

summing all numbers from 1 to 10 million:

via a list comprehension - will use hundreds of megabytes in memory (see task manager):

```py
sum([a for a in range(1, 10_000_001)])
```

via a generator expression:

```py
sum((a for a in range(1, 10_000_001)))
```
