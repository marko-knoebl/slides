# Codequalität und Linting

## Codequalität und Linting

Aspekte:

- allgemeines Linting
- Stil-Konventionen (PEP8)
- Docstrings

## Allgemeines Linting: Pylint

Finden allgemeiner Fehler

VS Code Konfiguration via `python.linting.pylintEnabled` und `python.linting.pylintUseMinimalCheckers`

## PEP8

Standard-Stil für Python-Code

offizielles Dokument: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

## PEP8 & Code-Formatierungs-Tools

- autopep8
- yapf
- _black_

In VS Code-Config: `"python.formatting.provider": "black"`

## PEP8 und Code-Formatierungs-Tools

```py
# Eingabecode:
a='hello'; b="bye";

# autopep8:
a = 'hello'
b = "bye"

# yapf:
a = 'hello'
b = "bye"

# black:
a = "hello"
b = "bye"
```

## PEP8 und Code-Formatierungs-Tools

```py
Eingabecode:

a[0+3:1]

# autopep8:
a[0+3:1]

# yapf:
a[0 + 3:1]

# black:
a[0 + 3 : 1]
```

## Docstrings

Beschreiben eine Funktion / Klasse / Modul genauer

## Docstrings

Beispiel:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

## Docstrings anzeigen

```bash
python -m pydoc math
python -m pydoc math.floor
```

## Docstring-Format

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig-Format

Docstring eines Moduls: Beschreibung, Liste der exportierten Funktionen mit einzeiligen Zusammenfassungen

Docstring einer Klasse: Beschreibung, Liste der Methoden

Docstring einer Funktion: Beschreibung, Liste der Parameter

## Pydocstyle

Linter zum validieren von Docstrings

## Python-Philosophie, Zen of Python

Auszüge aus dem _Zen of Python_ (anzeigbar via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._
