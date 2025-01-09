# Setup

## Setting up git on Windows

Install from <https://git-scm.com>

Install with default options - we will configure it afterwards

## Configuring git

example: show the current value of the "core.editor" setting:

```bash
git config --global core.editor
```

set the value of "core.editor" to "nano":

```bash
git config --global core.editor nano
```

## Configuring git

some configuration options:

- `user.name` (e.g. "John Doe" - with quotation marks)
- `user.email` (does not _have_ to be a real email)
- `core.editor` (default: _vi_, simpler option: _nano_)
- `pull.ff` (recommendation: set to _true_)
- `init.defaultBranch` (recommendation: _main_ or _master_)
