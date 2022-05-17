# Modules and packages

## Modules and packages

- Module = collection of Python objects that can be imported
- Package = collection of modules

(packages are actually a special type of modules)

## Example imports

- `urllib` = package
- `urllib.request` = module
- `urllib.request.urlopen` = function

<!-- list separator -->

- `sys` = module
- `sys.path` = object

## Example imports

Typical imports:

```py
import module1
from package2 import module2a, module2b
from module3 import object3a, object3b
from package4.module4 import object4a, object4b
```

Specific examples:

```py
import os
from urllib import request, response
from math import sqrt, pi
from http.client import HTTPConnection, HTTPSConnection
```

## Shorter names for imports

Typically used in an interactive console to save keystrokes:

Short names:

```py
import numpy as np
import matplotlib.pyplot as plt
import tkinter as tk
```

Importing everything from a module (usually not recommended):

```py
from math import *
```

## Automatic import of submodules

When importing _some_ packages, submodules will be imported automatically.

Examples:

```py
import os
import numpy as np

os.path.join(...)
np.random.randint(10)
```

Counterexample - this will fail:

```py
import urllib

urllib.request.urlopen(...)
```

## Conventions for imports

- all imports in a Python file _should_ be at the start of the file
- imports _should_ be split into three groups:
  - imports from the standard library
  - imports from other libraries
  - imports within the project
