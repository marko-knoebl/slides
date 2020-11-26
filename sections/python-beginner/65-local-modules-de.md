# Lokale Module

## Lokale Module

wir können lokale Python-Dateien als Module importieren

Beispiel: lokale Datei _messages.py_

```py
import messages

print(messages.message1)
```

## Lokale Module

Zusammenfassung von Modulen in Pakete (via Ordnern)

Beispiel: Ordner _phrases/_, Dateien _phrases/messages.py_ und _phrases/greetings.py_

```py
from phrases import greetings

print(greetings.greeting1)
```

## Auflösen von Imports

Suchreihenfolge von Imports:

- Verzeichnis, in dem das ursprünglich ausgeführte Python Skript liegt
- Standardlibrary
- externe Libraries

Vermeide Namensgleichheit mit existierenden Modulen / Paketen!
