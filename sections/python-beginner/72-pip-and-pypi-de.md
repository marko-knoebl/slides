# PIP und PyPI

## PIP und PyPI

- _PyPI_: Python Package Index: offizielles Repository für installierbare Python-Pakete
- _PIP_: Paketmanager

## PIP

einfache Verwendung aus dem Terminal:

```bash
pip install package_a package_b
```

## PyPI

Website des Python Package Index:

https://pypi.org/

## PIP und PyPI

Übung:

Verwandle den folgenden Markdown-String ind HTML - suche hierfür ein passendes Paket von PyPI

```py
markdown_string = """
# Important packages

- requests
- numpy
- sqlalchemy
"""
```

## PIP und PyPI

mögliche Lösung:

```bash
pip install markdown
```

```py
import markdown

html_string = markdown.markdown(
    markdown_string
)
```
