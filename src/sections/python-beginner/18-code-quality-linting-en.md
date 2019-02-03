# Code quality and linting

## Code quality and linting

aspects:

- general linting
- style conventions (PEP8)
- docstrings

## general linting: Pylint

Finding and displaying general errors

Configurable via `python.linting.pylintEnabled` and `python.linting.pylintUseMinimalCheckers`

## PEP8

standard styleguide for Python code

official document: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

## PEP8 & code formatting tools

- autopep8
- yapf
- _black_

In VS Code config: `"python.formatting.provider": "black"`

## PEP8 & code formatting tools

```py
# input:
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

## PEP8 and code formatting tools

```py
# input:
a[0+3:1]

# autopep8:
a[0+3:1]

# yapf:
a[0 + 3:1]

# black:
a[0 + 3 : 1]
```

## Docstrings

Documentation that describes a function / class / module in more detail

## Docstrings

example:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

## displaying docstrings

```bash
python -m pydoc math
python -m pydoc math.floor
```

## Docstring-Format

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig-Format

docstring of a module: description, list of exported functions with single-line summaries

docstring of a class: description, ist of its methods

docstring of a function: description, list of its parameters

## Pydocstyle

linter for validating docstrings

## Python philosophy, PEP20

## import this

## one way to do it
