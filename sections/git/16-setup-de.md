# Setup

## Setup unter Windows

Installation von <https://git-scm.com>

Installiere mit Standardoptionen - wir werden es anschließend konfigurieren

## Konfiguration von Git

Beispiel: Zeige den aktuellen Wert der Einstellung "core.editor":

```bash
git config --global core.editor
```

Setze den Wert von "core.editor" auf "nano":

```bash
git config --global core.editor nano
```

## Konfiguration von Git

Beispiele für Konfigurationsoptionen:

- `user.name` (z.B. "John Doe" - mit Anführungszeichen)
- `user.email` (_muss_ keine echte email sein)
- `core.editor` (Standard: _vi_, einfachere Möglichkeit: _nano_)
- `pull.ff` (Empfehlung: auf _true_ setzen)
- `init.defaultBranch` (Empfehlung: _main_ oder _master_)
