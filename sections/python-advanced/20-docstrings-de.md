# Docstrings

## Docstrings anzeigen

aus der interaktiven Konsole:

```py
help(round)
import math
help(math)
help(math.floor)
```

aus dem Terminal:

```bash
python -m pydoc round
python -m pydoc math
python -m pydoc math.floor
```

## Docstring-Format

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig-Format

Docstring eines Moduls: Beschreibung, Liste exportierter Funktionen mit einzeiligen Zusammenfassungen

Docstring einer Klasse: Beschreibung, Liste der Methoden

Docstring einer Funktion: Beschreibung, Liste der Parameter

## Pydocstyle

Linter zum Validieren von Docstrings

## reStructuredText und Sphinx

_reStructuredText (reST)_ = einfache Auszeichnungssprache (ähnlich zu _Markdown_), die in Python Docstrings verwendet werden kann

_Sphinx_ = Werkzeug, das aus bestehenden Docstrings Dokumentation in HTML und ähnlichen Formaten generiert

## reStructuredText

Beispiel

```rest
Heading
=======

- list item 1
- list item 2

Link to `Wikipedia`_.

.. _Wikipedia: https://www.wikipedia.org/

.. code:: python

   print("hello")
```
