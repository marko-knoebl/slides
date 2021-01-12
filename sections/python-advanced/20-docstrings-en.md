# Docstrings

## Displaying docstrings

from the interactive Python console:

```py
help(round)
import math
help(math)
help(math.floor)
```

from the terminal:

```bash
python -m pydoc round
python -m pydoc math
python -m pydoc math.floor
```

## Docstring format

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig format

Docstring of a module: description, list of exported Functions with single-line summaries

Docstring of a class: description, list of methods

Docstring of a function: description, list of parameters

## Pydocstyle

Linter for validating docstrings

## reStructuredText and Sphinx

_reStructuredText (reST)_ = simple markup language (similar to _Markdown_), is used in Python docstrings

_Sphinx_ = tool that uses existing docstrings to generate documentation in HTML and similar formats

## reStructuredText

Example:

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
