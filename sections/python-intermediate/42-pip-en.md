# PIP & pipenv

## PIP

_PIP_ = Package manager for Python

Simple usage:

```bash
pip install requests numpy
```

Packages and their dependencies are looked up in the Python Package Index: https://pypi.org/

## PIP

Installing specific Versions:

```
pip install requests==1.1
pip install numpy>=1.16
```

## PIP

dependency list in a requirements file that can be shared with others:

requirements.txt:

```
requests==1.1
numpy>=1.16
```

```bash
pip install -r requirements.txt
```

## Pipenv

_Pipenv_: virtual environments that enable installation of different package versions per project

## Pipenv

```bash
pip install pipenv
```

## Pipenv

Using pipenv:

```bash
pipenv install requests
pipenv install numpy
```

This creates two files:

- _Pipfile_: general dependency information
- _Pipfile.lock_: exact version numbers

## Pipenv

Executing Python scripts in a PIP environment:

```bash
pipenv run python foo.py
```
