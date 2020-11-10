# Arbeiten mit Dateien

## Arbeiten mit Dateien

Datei = Abfolge von Bytes auf einem Speichermedium

Oft ist eine Datei eine Folge von Textzeichen - z.B. die Formate _.txt_, _.html_, _.csv_ oder _.py_.

Der Inhalt von Textdateien kann als _Strings_ geschrieben und gelesen werden, andere Dateien können als Bytefolge repräsentiert werden.

## Textdatei schreiben

```py
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world\n")
file.write("end\n")
file.close()
```

Die Datei wird zum Schreiben geöffnet (_w_ = _write_).

Als Zeichencodierung wird _UTF-8_ verwendet.

## Textdatei lesen

```py
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

Standardmodus: Lesen (_r_ = _read_)

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

## Binärdateien

```py
wasm_content = bytes([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 127,
    3, 2, 1, 0, 7, 10, 1, 6, 97, 110, 115, 119, 101, 114,
    0, 0, 10, 6, 1, 4, 0, 65, 42, 11
])

file = open("answer.wasm", mode="wb")
file.write(wasm_content)
file.close()
```

## Open und das with-Statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

Datei wird automatisch geschlossen, wenn der eingerückte Codeblock verlassen wird.

## Zeichencodierung

Textdateien können unterschiedlich codiert sein:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Praxistipp: Wenn möglich UTF-8 verwenden (beste Unterstützung für Sonderzeichen)

## Zeichencodierung

Die Standard-Zeichencodierung für Textdateien hängt vom Betriebssystem ab:

```py
import locale
locale.getpreferredencoding()
```

## File-like objects

Objekte, die z.B. `.read()` oder `.write()` unterstützen:

- Dateien (z.B. via `open()`)
- `sys.stdout`, `sys.stdin`
  - z.B. `sys.stdin.readline()`
- Antworten aus dem Netzwerk, z.B. via `urllib.request.urlopen('https://google.com')`

## File-like objects

Zeile für Zeile einlesen (geringer Speicherbedarf):

```py
with open("myfile.txt", encoding="utf-8") as file:
    for line in file:
        print(line)
```

## File-like objects

Methoden / Attribute:

- `.close()`
- `.mode`
- `.read()` (lies die ganze Datei ein)
- `.read(10)` (lies die nächsten 10 Bytes)
- `.readline()` (lies die nächste Zeile)

## Beispiel

Programm, das Einträge einer Einkaufsliste vom Benutzer abfragt und in einer Textdatei abspeichert
