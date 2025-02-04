# VS Code for Python

## VS Code for Python

popular development environments for Python:

- _VS Code_ (open source)
- _PyCharm Community_ (open source)
- _PyCharm Professional_

## VS Code

Basic functionality:

- opening a folder
- file explorer
- creating a new (Python) file
- split editor

## Python extension

functionality:

- shows errors / warnings
- automatic formatting (via extra tools)
- debugging
- Jupyter notebooks

## Python extension

installation:

- open the extensions view in the left sidebar (fifth icon)
- install the extension named _Python_ by _Microsoft_

registering your Python installation with VS Code:

- open the command palette (_F1_ or _Ctrl_ + _Shift_ + _P_)
- search for "Python: select interpreter"
- Enter
- wait...
- choose the desired Python version (probably only 1 choice)

## Formatter extensions

recommended formatter: _black_ (available via the extension "Black Formatter")

## Configuration

via _File_ - _Preferences_ - _Settings_

possible settings:

- Auto Save
- Format on Save
- Word Wrap
- Python > Formatting: Provider (recommendation: _black_)
- ...

## Command palette

command palette: via _F1_ or _Ctrl_ + _Shift_ + _P_

- searchable
- shows shortcuts

example commands (some are only available for specific file types):

- _View: Toggle Terminal_
- _Find_
- _Format Document_
- ...

## Python extension: running programs

_Debug_ - _Start Without Debugging (Ctrl + F5)_ (will run program in the project directory)

or

green "Play" button in the editor view (will run program in the current working directory)
