# VS Code für Python

## VS Code für Python

verbreitete Entwicklungsumgebungen für Python:

- _VS Code_ (open source)
- _PyCharm Community_ (open source)
- _PyCharm Professional_

## VS Code

Grundlegendes:

- Öffnen eines Ordners
- Datei-Explorer
- Erstellen einer neuen (Python-)Datei
- Teilen der Editor-Ansicht

## Python-Extension

Funktionalität:

- anzeigen von Fehlern / Warnungen
- Automatische Formatierung (mittels zusätzlicher Tools)
- Debugging
- Jupyter Notebooks

## Python-Extension

Installation:

- Öffne die Extensions-Sidebar: fünftes Symbol auf der linken Seite
- Installiere die Extension namens _Python_ von _Microsoft_

Registrierung der Python-Installation in VS Code:

- Öffne die Befehlspalette (_F1_ oder _Ctrl_ + _Shift_ + _P_)
- Suche nach "Python: select interpreter"
- _Enter_
- warte ...
- wähle die gewünschte Python-Version (vermutlich nur 1 Option verfügbar)

## Formatierungs-Extension

empfohlenes Formatierungs-Tool: _black_ (verfügbar über die Extension "Black Formatter")

## Konfiguration

mittels _File_ - _Preferences_ - _Settings_

mögliche Einstellungen:

- Auto Save
- Format on Save
- Word Wrap
- Python > Formatting: Provider (Empfehlung: _black_)
- ...

## Befehlspalette

Befehlspalette: via _F1_ oder _Ctrl_ + _Shift_ + _P_

- durchsuchbar
- zeigt Kurzbefehle an

Beispiele für Befehle:

- _View: Toggle Terminal_
- _Find_
- _Format Document_
- ...

## Python-Extension: Ausführen von Programmen

_Debug_ - _Start Without Debugging (Ctrl + F5)_ (führt Programm im Projektordner aus)

oder

grünes Play-Symbol zur Editoransicht (führt Programm im aktuellen "working directory" im Terminal aus)
