# Setup

## Setting up git on Windows

Install from <https://git-scm.com>

## Setting up git on Windows

recommendations:

- **Select Components**:
  - uncheck _Git GUI Here_
  - check _Git Bash Here_ for an easy way to get into the _bash_ from the Windows Explorer
- **Default editor**:
  - if unsure, use _Nano_
- **line ending conversions**:
  - recommendation: _Checkout as-is, commit Unix-style line endings_
- **Choose a credential helper**:
  - choose _Git Credential Manager Core_ for advanced integration with services like _GitHub_, otherwise choose _None_

## Configuring git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

```bash
git config --global pull.ff true
```
