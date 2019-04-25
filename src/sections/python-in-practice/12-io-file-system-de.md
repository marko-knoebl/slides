# Arbeiten mit Dateien und Ordnern

## Arbeiten mit Dateien und Ordnern

zwei wichtige Pakete:

- _os_
- _shutil_

## os

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

## Übung

Programm, das alle Textdateien in einem Ordner nach einem Begriff durchsucht und die Anzahlen angibt
