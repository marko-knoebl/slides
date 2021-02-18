# Installation unter Windows

## Installation unter Windows

Download von <https://python.org>

Während der Installation: Häkchen bei "Add Python 3.x to PATH" setzen

<!--
adding to path

program "environment variables" / "Umgebungsvariablen für dieses Konto bearbeiten"
add to PATH:

for Anaconda:
C:\Users\Marko\Anaconda3
C:\Users\Marko\Anaconda3\Scripts
-->

<!--
why not use windows store version?

- does not automatically resolve the maximum path limit (260 characters)
  manual fix: regedit: set `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled` to `1`
- does not put executables on PATH (instead of "flask" we have to run "python -m flask")
-->

## Installation unter Windows

Überprüfen der Installation:

`python --version` sollte die Versionsnummer anzeigen

`pip install requests` sollte ein kleines Python-Paket namens _requests_ erfolgreich herunterladen und installieren

## Installation unter Windows

Python Installation beinhaltet:

- Python-"Runtime" zum ausführen von Python-Code
- IDLE: Einfache Entwicklungsumgebung
- interaktive Python-Konsole
- PIP: Paketmanager zum Installieren von Erweiterungen
