# For loops

## For loops with tuple unpacking

Recap: tuple unpacking

```py
time = (23, 45, 0)

hour, minute, second = time
```

## For loops with tuple unpacking

Enumerating list items:

```py
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

Enumerate returns a data structure that behaves like this list:

```py
[(0, 'Alice'), (1, 'Bob'), (2, 'Charlie')]
```

## For loops with tuple unpacking

Listing directory contents (including subfolders) via `os.walk`:

```py
import os

for directory, dirs, files in os.walk("C:\\"):
    print(f"{directory} {files}")
```

```
C:\ []
C:\PerfLogs []
C:\Program Files []
C:\ProgramData []
...
```
