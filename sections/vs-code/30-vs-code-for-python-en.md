# VS Code for Python

## Python extension

installation:

- open the extensions view in the sidebar: fifth symbol on the left
- install the extension named _Python_ by _Microsoft_

configuration:

- open the command pallette (F1)
- search for "Python: select interpreter"
- Enter
- wait...
- choose the desired Python version

## Python extension: running programs

_Debug_ - _Start Without Debugging (Ctrl + F5)_ (will run program in the project directory)

or

green "Play" button in the editor view (will run program in the current working directory)

## Other extensions / packages

VS code extensions:

- _Pylance_ (preview release)

Python packages for use with VS Code:

- _pylint_ (linter)
- _black_ (formatter)
- _rope_ (refactoring - e.g. renaming variables - not needed with PyLance)

## PyLance

after install:

- would you like to make PyLance your default language server?
- reload VS Code

## PyLint

in order to see errors in VS Code: install the Python package _pylint_

```bash
pip install pylint
```

## Auto formatting

We can auto format code via _Shift_ + _Alt_ + _F_

For Python code, install the Formatter _black_:

```bash
pip install black
```
