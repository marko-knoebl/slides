# Local modules

## Local modules

we can import local Python files as modules

example: local file _messages.py_

```py
import messages

print(messages.message1)
```

## Local modules

we can create so-called _packages_ as folders

example: folder _phrases/_, files _phrases/messages.py_ and _phrases/greetings.py_

```py
from phrases import greetings

print(greetings.greeting1)
```

## Resolving imports

Search order of imports:

- directory of the Python script that was originally executed
- standard library
- external libraries

Avoid name clashes with existing modules / packages!
