# Setup

## Setup unter Windows

Installation von <https://git-scm.com>

## Setup unter Windows

Empfehlungen:

**select components**: _Windows Explorer integration_ deaktivieren (würde zusätzliche Befehle ins Rechtsklickmenü des Explorers hinzufügen)

**default editor**: wähle _Nano_ als einfachen Konsolen-baiserten Texteditor

**name of the initial branch**: wähle "main"

**line ending conversions**: _Checkout as-is, commit as-is_ - und Konfiguration der Entwicklungsumgebung auf LF

**default behavior of git pull**: _only ever fast-forward_

## Konfiguration von Git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

```bash
git config --global pull.ff true
```
