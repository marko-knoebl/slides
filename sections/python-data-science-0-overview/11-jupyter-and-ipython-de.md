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

## Jupyter Notebook - online

kostenlose online Jupyter Notebooks:

- _Google Colab_: <a href="https://colab.research.google.com" target="_blank">https://colab.research.google.com</a> (Login erforderlich)
- <https://jupyter.org/try>
  - _JupyterLite_: Jupyter-Notebooks, die direkt im Browser laufen (via WebAssembly)
  - _Binder_: begrenzte Sessions
- _kaggle_ (Login zum Ändern / Erstellen erforderlich): <a href="https://www.kaggle.com" target="_blank">https://www.kaggle.com</a>
  - populäre öffentliche Notebooks auf _kaggle_: <a href="https://www.kaggle.com/code?sortBy=voteCount" target="_blank">https://www.kaggle.com/code?sortBy=voteCount</a>

## Jupyter Notebook - VS Code

VS Code kann sich mit dem IPython-Kernel verbinden:

In der Befehlspalette von VS Code (via F1) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter Notebook - Jupyterlab

Ausführen von Jupyterlab aus dem Terminal:

```bash
jupyter-lab
```

## Code schreiben und ausführen

Code in eine Zelle schreiben, z.B.

```py
import time
time.sleep(3)
1 + 1
```

dann _Shift_ + _Enter_ drücken

## Code schreiben und ausführen

In IPython gibt es nummerierte Eingaben, z.B. `[1]`

## Code schreiben und ausführen

Wenn das letzte Statement in einer Zelle einen Wert ergibt, wird dies als Ausgabe angezeigt

Um dies zu unterdrücken, schließe das letzte Statement mit einem Semikolon ab

## Code schreiben und ausführen

Interface-Funktionalität (je nach Notebook-Typ verschieden):

- Zelle ausführen
- neu starten (vergisst bisherige Variablen und Zustand)
- alle Zellen ausführen / neu starten und alle Zellen ausführen
- Ausführung unterbrechen

## Dokumentation via Markdown

Wir können Dokumentation über die standardisierte Sprache _Markdown_ hinzufügen:

Wechsle von _Code_ auf _Markdown_ und versuche den folgenden Code:

```md
# Heading

- item 1
- item 2
```

Zelle ausführen (oder verlassen), um das Resultat anzuzeigen, doppelklicken zum erneuten Editieren

<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatshee" target="_blank">Markdown Cheatsheet</a>

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

## Terminal-Befehle ausführen

IPython beinhaltet direkten Zugriff auf viele Terminal-Befehle, z.B. `ls`, `cd`, ...

Wir können beliebige Terminal-Befehle ausführen, indem wir ein `!` davor setzen
