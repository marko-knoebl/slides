# PIP and pipenv

## PIP

Installing specific versions:

```
pip install requests~=2.0
pip install numpy~=1.19
```

## PIP

dependency list in a requirements file that can be shared with others:

requirements.txt:

```
requests~=2.0
numpy~=1.19
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
pipenv install requests~=2.0
pipenv install numpy~=1.19
```

This creates two files:

- _Pipfile_: general dependency information
- _Pipfile.lock_: exact version numbers

## Pipenv

installation based on an existing _Pipfile_:

```bash
pipenv install
```

## Pipenv

Executing Python scripts in a PIP environment:

```bash
pipenv run python foo.py
```
