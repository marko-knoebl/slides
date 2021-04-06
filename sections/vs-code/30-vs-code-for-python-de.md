# VS Code für Python

## Python-Extension

Installation:

- Extensions-Sidebar öffnen: fünftes Symbol auf der linken Seite
- Installation der _Python_-Extension von _Microsoft_

Konfiguration:

- Befehlspalette öffnen (F1)
- Suchen nach "Python: select interpreter"
- Enter
- warten...
- gewünschte Python-Version auswählen

## Python Extension: Ausführen von Programmen

_Debug_ - _Start Without Debugging (Ctrl + F5)_ (führt Programm im Projektordner aus)

oder

grünes Play-Symbol zur Editoransicht (führt Programm im aktuellen "working directory" im Terminal aus)

## Andere Extensions und Pakete

VS Code Extensions:

- _PyLance_ (Preview-Release)

Python-Pakete zur Verwendung mit VS Code:

- _pylint_ (Linter)
- _black_ (Formatierer)
- _rope_ (Refactoring - z.B. umbenennen von Variablen - wird mit PyLance nicht benötigt)

## PyLint

um Fehler in VS Code angezeigt zu bekommen: Installation des Python-Pakets _pylint_

```bash
pip install pylint
```

## Autoformatierung

Automatische Formatierung mittels _Shift_ + _Alt_ + _F_

Für Python Code mittels des Formatters _black_:

```bash
pip install black
```
