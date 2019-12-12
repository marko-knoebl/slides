# Arbeiten mit Dateien und Ordnern

## Arbeiten mit Dateien und Ordnern

wichtige Pakete:

- _os_
- _os.path_
- _shutil_

## os und shutil (1)

- `os.getcwd()` (aktueller Pfad)
- `os.chdir()`
- `os.listdir()`

<!-- list separator -->

- `os.walk()`

## os und shutil (2)

- `os.mkdir("foo")`
- `os.mkdir("foo/bar/baz")`

<!-- list separator -->

- `os.remove("foo.txt")` (Datei löschen)
- `os.rmdir("foo/bar/baz")` (leeren Ordner löschen)
- `shutil.rmtree()` (Ordner löschen)

<!-- list separator -->

- `os.rename("foo.txt", "bar.txt")`
- `shutil.move()` (Datei oder Ordner verschieben)
- `shutil.copy("foo.txt", "bar")` (Datei kopieren)
- `shutil.copytree()` (Ordner kopieren)

## Exkurs: allgemeine Terminal-Befehle

Direkte Ausgabe mittels `os.system`:

```py
os.system("ls .")
os.system("mkdir foo")
```

Ergebnisse in Python einlesen mittels `os.popen`:

```py
a = os.popen("ls .").read()
print(a)
```

## Übung

Programm, das alle Textdateien in einem Ordner nach einem Begriff durchsucht und die Anzahlen angibt
