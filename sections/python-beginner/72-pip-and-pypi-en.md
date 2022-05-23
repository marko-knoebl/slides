# PIP and PyPI

## PIP and PyPI

- _PyPI_: Python Package Index: official repository for installable Python packages
- _PIP_: package manager for Python

## PIP

simple use from the terminal:

```bash
pip install package_a package_b
```

## PyPI

website of the Python Package Index

https://pypi.org/

## PIP and PyPI

exercise:

convert the following markdown string to HTML - look for a package on PyPI to help you with the task

```py
markdown_string = """
# Important packages

- requests
- numpy
- sqlalchemy
"""
```

## PIP and PyPI

possible solution:

```bash
pip install markdown
```

```py
import markdown

html_string = markdown.markdown(
    markdown_string
)
```
