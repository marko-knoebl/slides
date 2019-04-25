# sys

## sys

Funktionen zur Python-Umgebung

Beispiele:

- `argv`
- `stdout.write`
- `getrefcount`
- `path`
- `version`
- `version_info`

## Kommandozeilenparameter

Auslesbar über `sys.argv`

## Überschreiben von stdout.write

```py
import sys

old_stdout = sys.stdout

class LoudStdout:
    def write(self, text):
        old_stdout.write(text.upper())

loudstdout = LoudStdout()

sys.stdout = loudstdout
```
