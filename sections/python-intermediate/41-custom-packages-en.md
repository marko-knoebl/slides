# Custom modules

## Custom modules

Goal: creating a custom module that can be used like this:

```py
from foo import a, b
```

## Custom modules

Simple module as a Python file:

```py
# foo.py
a = 1
b = 2
```

## Custom modules

Module as a directory:

```
- foo/
  - __init__.py
```

```py
# __init__.py
a = 1
b = 2
```

## Custom modules

Module as a directory with separated defintions:

```
- foo/
  - __init__.py
  - _a_mod.py
  - _b_mod.py
```

```py
# __init__.py
from _a_mod import a
from _b_mod import b
```

## Custom packages

Goal: creating a custom package that can be used like this:

```py
from foo import bar

print(bar.a)
print(bar.b)
```

## Custom packages

```
- foo/
  - bar.py
```

## Resolving imports

Search order:

- directory of the Python script that was executed
- standard library
- external libraries

Avoid name clashes with existing modules / packages!

## Resolving imports

To see all search paths for imports:

```py
import sys
print(sys.path)
```

## Compilation of modules

Imported modules will be saved in a compiled form, making subsequent loading of the modules faster.

Compiled versions will be saved in the folder `__pycache__`
