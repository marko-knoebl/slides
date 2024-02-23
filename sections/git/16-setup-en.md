# Setup

## Setting up git on Windows

Install from <https://git-scm.com>

## Setting up git on Windows

recommendations:

**select components**: uncheck _Windows Explorer integration_ (this would add new entries in the right-click menu of the explorer)

**default editor**: choose _Nano_ as a simple console based text editor

**name of the initial branch**: choose "main"

**line ending conversions**: _Checkout as-is, commit as-is_ - and set up your development environment to use LF

**default behavior of git pull**: _only ever fast-forward_

## Configuring git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

```bash
git config --global pull.ff true
```
