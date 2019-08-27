# PIP

## PIP

_PIP_ = Paketmanager für Python

Einfache Verwendung:

```bash
pip install requests numpy
```

Pakete und deren Abhängigkeiten werden im Python Package Index gesucht: https://pypi.org/

## PIP

Installation bestimmter Versionen:

```
pip install requests==1.1
pip install numpy>=1.16
```

## PIP

Abhängigkeitenliste in einer Requirements-Datei, die einfach mit anderen geteilt werden kann:

requirements.txt:

```
requests==1.1
numpy>=1.16
```

```bash
pip install -r requirements.txt
```

## Pipenv

Via Pipenv: virtuelle Umgebungen, die die projektweise Installation verschiedener Paketversionen erlauben

## Pipenv

Installation von pipenv:

```bash
pip install pipenv
```

## Pipenv

Verwendung von pipenv:

```bash
pipenv install requests
pipenv install numpy
```

Es entstehen zwei Dateien:

- _Pipfile_: allgemeine Abhängigkeitsinformationen
- _Pipfile.lock_: genaue Versionsnummern

## Pipenv

Ausführen in einer PIP-Umgebung:

```bash
pipenv run python foo.py
```
