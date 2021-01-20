# Setup

## Setup unter Windows

Installation von <https://git-scm.com>

## Setup unter Windows

Empfehlungen:

- **Select Components**:
  - _Git GUI Here_: deaktivieren
  - _Git Bash Here_: aktivieren, um aus dem Windows Explorer einfach ein _Bash_-Terminal öffnen zu können
- **Default editor**:
  - falls unsicher, wählre _Nano_ als einfachen Konsolen-baiserten Texteditor
- **line ending conversions**:
  - Empfehlung: _Checkout as-is, commit Unix-style line endings_
- **Choose a credential helper**:
  - wähle _Git Credential Manager Core_ für erweiterte Integration mit Services wie _GitHub_, anderfalls wähle _None_

## Konfiguration von Git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
