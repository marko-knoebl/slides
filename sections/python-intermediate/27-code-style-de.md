# Coding-Stil

## PEP8

Standard-Stil für Python-Code

offizielles Dokument: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

## Code-Formatierungs-Tools

- **black**
- autopep8
- yapf

In VS Code-Einstellungen: `"python.formatting.provider": "black"`

## Code-Formatierungs-Tools

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

## Python-Philosophie, Zen of Python

Auszüge aus dem _Zen of Python_ (anzeigbar via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._
