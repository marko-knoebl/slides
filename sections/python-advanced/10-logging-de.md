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

Übung: Hinzufügen von Logging zu einer bestehenden Funktion (z.B. zu einem Sortieralgorithmus)
