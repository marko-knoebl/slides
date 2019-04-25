# Arbeiten mit Dateien

## Arbeiten mit Dateien

Datei = Abfolge von Bytes auf einem Speichermedium

## Die Funktion "open"

```py
file_obj = open("todos.txt")
content = file_obj.read()
file_obj.close()
print(content)
```

Open erstellt eine Instanz einer Unterklasse von IOBase

## Dateimodi

```py
# mode: text, append
open("todos.txt", mode="ta")
```

## Dateimodi

- `t`: Textmodus (standard)
- `b`: Binär

<!-- list-separator -->

- `r`: Lesen (standard)
- `w`: (Über)schreiben
- `a`: Anhängen

## Lesen und Schreiben

```py
t = open("loremipsum.txt")
print(t.read())
t.close()
```

## Lesen und Schreiben

```py
t = open("todos.txt", mode="a", encoding="utf-8")
t.write("Learn Python")
t.close()
```

```py
coins = open("coins.b", mode="ba")
coins.write(bytes([0b01001110, 0b11100100]))
coins.close()
```

## Open und das with-Statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

Kein explizites Schließen des Dateiobjekts mehr notwendig. Datei wird automatisch geschlossen, wenn der eingerückte Abschnitt verlassen wird.

## Zeichencodierung

Textdateien können unterschiedlich codiert sein:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Praxistipp: Immer UTF-8 verwenden

## Zeichencodierung

Die Standard-Zeichencodierung für Textdateien hängt vom Betriebssystem ab:

```py
import locale
locale.getpreferredencoding()
```

## Zeichencodierung

Explizites angeben der Textcodierung:

```py
open("file.txt", encoding="utf-8")
```

## File-like objects

Objekte, die zB `.read()` oder `.write()` unterstützen:

- Dateien (zB via `open()`)
- `sys.stdout`, `sys.stdin`
  - z.B. `sys.stdin.readline()`
- Antworten aus dem Netzwerk, zB via `urllib.request.urlopen('https://google.com')`

## File-like objects

```py
with file as open('myfile.txt', encoding="utf-8"):
    # read individual lines
    for line in file:
        print(line)
    # read entire file
    print(file.read())
```

## File-like objects

Methoden:

- `.close()`
- `.mode`
- `.read()` (lies die ganze Datei ein)
- `.read(10)` (lies die nächsten 10 Bytes)
- `.readline()` (lies die nächste Zeile)
