# Custom modules: advanced

## Custom modules: advanced

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
from foo._a_mod import a
from foo._b_mod import b
```

## Resolving imports

To see all search paths for imports:

```py
import sys
print(sys.path)
```

## Compilation of modules

Imported modules will be saved in a compiled form, making subsequent loading of the modules faster.

Compiled versions will be saved in the folder `__pycache__`

## Module name and entrypoint

inside a an imported module, the variable `__name__` gives its name

if a Python file was run directly instead of being imported, its `__name__` will be `"__main__"`

```py
if __name__ == "__main__":
    print("this file was run directly (and not imported)")
```
