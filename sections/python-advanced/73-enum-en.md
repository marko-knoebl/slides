# Enum

## Enum

Enum = collection of symbolic names that can be used instead of specific strings

Using a string:

```py
a = Button(position="left")
```

Using an enum named _Position_:

```py
a = Button(position=Position.LEFT)
```

Enums can prevent typos and help with autocompletion.

## Enum

Defining an enum:

```py
from enum import Enum

class Position(Enum):
    UP = 1
    RIGHT = 2
    DOWN = 3
    LEFT = 4
```
