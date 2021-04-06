# Side effects and pure functions

## Side effects and pure functions

**pure functions**: functions that only interact with their environment by receiving parameters and returning values

**side effects**: actions of a function that change the environment

## Side effects and pure functions

common side effects:

- changing entries in _self_ in an object method
- input / output (interacting with the disk / network / ...)

side effects that are usually avoided:

- changing arguments that were passed in
- setting / changing global variables

## Pure functions

advantages of pure functions:

- easier to describe / reason about
- easier to reuse
- easier to test

## Side effects

example of a suboptimal function that changes an argument (_formats_):

```py
def list_files_by_formats(path, formats):
    if "jpg" in formats:
        formats.append("jpeg")
    files = []
    for file in os.listdir(path):
        for format in formats:
            if file.endswith("." + format):
                files.append(file)
                break
    return files
```

## Side effects

```py
formats = ["jpg", "png"]

print(list_files_by_formats(formats))

print(formats)

# will print: ["jpg", "png", "jpeg"]
```

## Side effects

more "correct" implementation:

```py
def list_files_by_formats(path, formats):
    if "jpg" in formats:
        formats = formats.copy()
        formats.append("jpeg")
    # ...
```

## Side effects

this _would_ be an anti-pattern (a function that modifies arguments):

```py
mylist = [2, 1, 3]

sort(mylist)
print(mylist)
# [1, 2, 3]
```

## Side effects

actual possibilites for sorting in Python:

pure function:

```py
print(sorted(mylist))
```

method that modifies data:

```py
mylist.sort()
print(mylist)
```

## Mutating default arguments

Unexpected behavior in Python when default arguments are mutated:

```py
def list_files_by_formats(path, formats=["gif", "jpg", "png"]):
    if "jpg" in formats:
        formats.append("jpeg")
    # ...
```

```py
list_files_by_formats(".")
# formats: ["gif", "jpg", "png", "jpeg"]

list_files_by_formats(".")
# formats: ["gif", "jpg", "png", "jpeg", "jpeg"]
```

(web search: _mutable default arguments_)
