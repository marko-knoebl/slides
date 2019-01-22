# Modules and Packages

---

## Modules and Packages

- Module = Python file from which objects can be imported
- Package = directory that includes Python modules

---

## example imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

---

## example imports: urllib

- `urllib` = package
- `urllib.request` = modules
- `urllib.request.urlopen` = function

---

## compilation of modules

Imported modules will be saved in a compiled form, making subsequent loading of the modules faster.

Compiled versions will be saved in the folder `__pycache__`

---

## be careful: avoid circular imports
