# Jupyter und IPython

## IPython

IPython = Fortgeschrittene interaktive Python Konsole, beinhaltet u.a. Autovervollständigung

## Jupyter Notebooks

Jupyter notebook = Dateiformat (_.ipynb_), das ein interaktives Python-Dokument repräsentiert, in dem Eingabezellen einzeln ausgewertet werden können; die Interaktivität basiert auf IPython

## Jupyter Interfaces

- _Jupyter Notebook_: webbasiertes Interface, das auf einem Server oder lokal laufen kann
- _JupyterLab_: Nachfolgeprojekt von _Jupyter Notebook_
- _VS Code_: unterstützt Jupyter notebooks ebenfalls

## Jupyter Notebooks - online

Jupyter online ausprobieren:

### Google Colab (Google Account benötigt)

- Gehe zu https://colab.research.google.com
- Wähle _File_ - _New Python 3 Notebook_

### Binder (begrenzte Sessions)

- Gehe zu https://jupyter.org/try
- _Try Classic Notebook_ auswählen
- warten ...
- _File_ - _New Notebook_ - _Python 3_

## Jupyter Notebooks - VS Code

wir installieren _ipykernel_ und seine Abhängigkeiten (_ipython_, _jupyter-core_, _jupyter-client_):

<!-- will install ipython, jupyter-core, jupyter-client -->

```bash
pip install ipykernel
```

In der Befehlspalette von VS Code (via F1) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

## Jupyter Notebooks - lokal

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befehl `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http://localhost:8888/tree)

Python-Pakete: _notebook_ oder _jupyterlab_

## Notebook Dateien

Anlegen neuer Notebook Dateien via _new_ - _Notebook: Python 3_

Speicherung unter _notebook.ipynb_

_Ipynb_: Dateiformat, das Python Code, Ausgaben und Dokumentation/Notizen beinhalten kann

## Code schreiben und ausführen

Code in eine Zelle schreiben, z.B.

```py
import time
time.sleep(3)
"hello"
```

dann _Shift_ + _Enter_ drücken

## Code schreiben und ausführen

In IPython gibt es nummerierte Eingaben, z.B. `[1]`

Während eine Eingabe ausgewertet wird, wird `[*]` angezeigt

Wenn das letzte Statement in einer Zelle einen Wert ergibt, wird dies als Ausgabe angezeigt

Um das Notebook neu zu starten und alle Zellen neu auszuwerten, drücke ⏩

## Code schreiben und ausführen

Auf die letzte Ausgabe zugreifen:

```py
print(_ * 3)
```

## Dokumentation via Markdown

Wir können Dokumentation über die standardisierte Sprache _Markdown_ hinzufügen:

Wir ändern das Dropdown von _Code_ auf _Markdown_ und versuchen den folgenden Code:

```md
# Heading

- item 1
- item 2
```

Zelle ausführen oder verlassen, um das Resultat anzuzeigen, doppelklicken zum erneuten Editieren

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Dokumentation

Dokumentation zu Funktion / Klasse / Modul / ... in einer Python Konsole anzeigen:

```py
help(str)
```

(Navigieren durch lange Ausgaben via _Enter_, Beenden via _Q_)

Shortcut in IPython / Jupyter:

```ipython
str?
```

## Tab-Vervollständigung und Wildcard-Ausdrücke

```ipython
*Error?
```

## Terminal-Befehle ausführen

IPython beinhaltet direkten Zugriff auf viele Terminal-Befehle, z.B. `ls`, `cd`, ...

Wir können beliebige Terminal-Befehle ausführen, indem wir ein `!` davor setzen
