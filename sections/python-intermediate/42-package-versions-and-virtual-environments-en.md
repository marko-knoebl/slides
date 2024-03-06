# Paketversionen und virtuelle Umgebungen

## Paketversionen

Installation eines Pakets via PIP:

```
pip install cowsay
```

Installation einer bestimmten Version:

```
pip install cowsay==6.1
```

Installation einer _kompatiblen_ Version (könnte auch Versionen 6.2, 6.3, etc. installieren - falls verfügbar)

```
pip install cowsay~=6.1
```

## Virtuelle Umgebungen

**Virtuelle Umgebungen**: ermöglichen es, für verschiedene Projekte unterschiedliche Abhängigkeiten und Versionen von Abhängigkeiten zu installieren

## Virtuelle Umgebungen

Erstellen einer neuen Virtuellen Umgebung (typischer Name: ".venv")

```
python -m venv .venv
```

erstellt einen Ordner ".venv/", der die virtuelle Umgebung enthält

## Virtuelle Umgebungen

Aktivieren einer Virtuellen Umgebung unter Windows:

```
./.venv/Scripts/activate
```

Deaktivieren der Umgebung:

```
deactivate
```

falls nötig: erlaube die Ausführung lokaler Scrits unter Windows - aus einem Admin-Terminal:

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Abhängigkeitslisten

"alte" Konfigurationsdatei: _requirements.txt_

"neue" Konfigurationsdatei: _pyproject.toml_

## Abhängigkeitslisten

Beispiel für _requirements.txt_:

```txt
cowsay~=6.1
requests~=2.30
```

Installation der Abhängigkeiten in _requirements.txt_:

```bash
pip install -r requirements.txt
```

## Abhängigkeitslisten

Beispiel für _pyproject.toml_:

```toml
[project]
name = "my-python-project"
version = "1.0"
dependencies = [
  "cowsay~=6.1",
  "requests~=2.30",
]
```

Installation:

```
pip install .
```
