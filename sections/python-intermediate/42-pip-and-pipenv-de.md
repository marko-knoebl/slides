# PIP und pipenv

## PIP

Installation bestimmter Versionen:

```
pip install requests~=2.0
pip install numpy~=1.19
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

Pipenv: virtuelle Umgebungen, die die projektweise Installation verschiedener Paketversionen erlauben

## Pipenv

```bash
pip install pipenv
```

## Pipenv

Verwendung von pipenv:

```bash
pipenv install requests~=2.0
pipenv install numpy~=1.19
```

Es entstehen zwei Dateien:

- _Pipfile_: allgemeine Abhängigkeitsinformationen
- _Pipfile.lock_: genaue Versionsnummern

## Pipenv

Installation basierend auf einer bestehenden _Pipfile_:

```bash
pipenv install
```

## Pipenv

Ausführen in einer PIP-Umgebung:

```bash
pipenv run python foo.py
```
