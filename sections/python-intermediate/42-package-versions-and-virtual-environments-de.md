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

Pakete, die vom Projekt verwendet werden, können in einer Datei namens _requirements.txt_ definiert werden

Beispiel für _requirements.txt_:

```txt
cowsay~=6.1
requests~=2.30
```

## Abhängigkeitslisten

Installation der Abhängigkeiten in _requirements.txt_:

```bash
pip install -r requirements.txt
```
