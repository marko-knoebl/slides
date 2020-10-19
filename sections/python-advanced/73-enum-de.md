# Enum

## Enum

Enum = eine Sammlung Symbolischer Namen, die z.B. anstatt vorgegebener Strings verwendet werden kann.

Verwendung eines Strings:

```py
a = Button(position="left")
```

Verwendung eines Enums namens _Position_:

```py
a = Button(position=Position.LEFT)
```

Enums können Tippfehler vermeiden und Autovervollständigung erleichtern.

## Enum

Definieren eines Enums:

```py
from enum import Enum

class Position(Enum):
    UP = 1
    RIGHT = 2
    DOWN = 3
    LEFT = 4
```
