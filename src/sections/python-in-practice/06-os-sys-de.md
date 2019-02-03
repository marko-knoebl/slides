# sys, os, shutil

## sys, os, shutil

- sys: Funktionen zur Python-Umgebung
- os: Funktionen zum Betriebssystem, Arbeiten mit Dateien
- shutil: Funktionen zum Arbeiten mit Dateien

## sys

Beispiele:

- `stdout.write`
- `getrefcount`
- `path`
- `version`
- `version_info`

## Kommandozeilenparameter

Auslesbar über `sys.argv`

## sys: stdout.write überschreiben

```py
import sys

old_stdout = sys.stdout

class LoudStdout:
    def write(self, text):
        old_stdout.write(text.upper())

loudstdout = LoudStdout()

sys.stdout = loudstdout
```

## os

Funktionen zu Betriebssystem und Dateizugriff

## os - Arbeiten mit Dateien und Ordnern

- `os.getcwd()` (aktueller Pfad)
- `os.chdir()`
- `os.chmod()`
- `os.listdir()`
- `os.mkdir('foo')`
- `os.rename('foo', 'bar')`
- `os.mkdir('foo/bar/baz')`
- `os.remove('foo/bar/baz/qux.txt')`
- `os.rmdir('foo/bar/baz')`
- `os.walk()`

## shutil

- `shutil.copy('origin', 'destination')` (Datei kopieren)
- `shutil.copytree()` (Ordner kopieren)
- `shutil.rmtree()` (Ordner löschen)
- `shutil.move()` (Datei oder Ordner verschieben)

## Übungen

Buch 14.4.2 (Suchbegriffanzahl in Dateien im Verzeichnis)
