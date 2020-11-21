# Logging

## Logging

long-running programs can document what they are doing in files

e.g.: long-running algorithms, web servers

## Logging

```py
import logging
logging.basicConfig(
    filename="sort.log",
    level=logging.DEBUG,
    filemode="w"
)

logging.debug("hello")
```

## Logging

Exercise: add logging to an existing function (e.g. to a sorting algorithm)
