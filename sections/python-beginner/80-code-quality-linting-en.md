# Code quality and linting

## Code quality and linting

aspects:

- general linting
- style conventions (PEP8)
- docstrings

## General linting: Pylint

Finding and displaying general errors

VS Code configuration via `python.linting.pylintEnabled` and `python.linting.pylintUseMinimalCheckers`

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

## Python philosophy, Zen of Python

Quotes from the _zen of Python_ (full text via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._
