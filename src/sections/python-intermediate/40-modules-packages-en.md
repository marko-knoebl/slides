# Modules and packages

## Modules and packages

- Module = Python file from which objects can be imported
- Package = directory that includes Python modules

## Example imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

## Example imports: urllib

- `urllib` = package
- `urllib.request` = modules
- `urllib.request.urlopen` = function

## Conventions for imports

- all imports in a Python file _should_ be at the start of the file
- imports _should_ be split into three groups:
  - imports from the standard library
  - imports from other libraries
  - imports within the project

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

## Be careful: avoid circular imports
