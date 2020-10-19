# Logging

## Logging

lange laufende Programme können ihren Ablauf in Log-Dateien dokumentieren

z.B.: lange laufende Algorithmen, Webserver

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

Beispiel: Sortieralgorithmus
