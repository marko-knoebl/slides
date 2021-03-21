# Jupyter und IPython

## IPython

IPython = Fortgeschrittene interaktive Python Konsole, beinhaltet u.a. Autovervollständigung

## Jupyter Notebooks

- interaktives Python-Dokument (basierend auf IPython)
- Dateiformat mit Endung _.ipynb_
- kann Python Code, Ausgaben / Grafiken und Dokumentation / Notizen beinhalten

## Jupyter Interfaces

- _Jupyter Notebook_: webbasiertes Interface, das auf einem Server oder lokal laufen kann
- _JupyterLab_: Nachfolgeprojekt von _Jupyter Notebook_
- _VS Code_: unterstützt Jupyter notebooks ebenfalls

## Jupyter Notebook - VS Code

VS Code kann sich mit dem IPython-Kernel verbinden:

In der Befehlspalette von VS Code (via F1) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter Notebook - Anaconda

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befehl `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http://localhost:8888/tree)

Python-Pakete: _notebook_ oder _jupyterlab_

## Jupyter Notebook - online

kostenlose online Jupyter Notebooks:

- _Binder_ (begrenzte Sessions): https://jupyter.org/try
- populäre öffentliche Notebooks auf _kaggle_: https://www.kaggle.com/notebooks?sortBy=voteCount (Login zum Ändern / Erstellen erforderlich)
- _Google Colab_: https://colab.research.google.com (Login erforderlich)

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

## Code schreiben und ausführen

Interface-Funktionalität (je nach Notebook-Typ verschieden):

- Zelle ausführen
- neu starten (vergisst bisherige Variablen und Zustand)
- alle Zellen ausführen / neu starten und alle Zellen ausführen
- Ausführung unterbrechen

## Code schreiben und ausführen

Auf die letzte Ausgabe zugreifen:

```py
print(_ * 3)
```

## Dokumentation via Markdown

Wir können Dokumentation über die standardisierte Sprache _Markdown_ hinzufügen:

Wechsle von _Code_ auf _Markdown_ und versuche den folgenden Code:

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
