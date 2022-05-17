# Code style

## PEP8

standard styleguide for Python code

official document: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

## Code formatters

- **black**
- autopep8
- yapf

In VS Code config: `"python.formatting.provider": "black"`

## Code formatters

input:

```py
a='Hello'; b="Have you read \"1984\"?"
c=a[0+1:3]
```

output via black:

```py
a = "Hello"
b = 'Have you read "1984"?'
c = a[0 + 1 : 3]
```

## Python philosophy, Zen of Python

Quotes from the _zen of Python_ (full text via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._
