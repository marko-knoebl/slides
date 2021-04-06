# VS Code

## VS Code

<https://code.visualstudio.com>

open source IDE

independent of _Visual Studio_ itself

## Basics

- opening a folder
- file explorer
- split editor

## Terminal

Open / close the terminal view via _ctrl_ + _\`_

Open an additional terminal via the _+_ Symbol

Terminals will run in the currently open folder

## Configuration

Via _File - Preferences - Settings_

Is split into _User Settings_ and _Workspace Settings_

## Configuration options

Recommendations:

- Accept Suggestions on Commit Character (Autocomplete on other keys than _Enter_): _deactivate_ if you're working with JavaScript / TypeScript
- Tab Size: _2_ or _4_

Further options:

- Auto Save
- Format on Save
- Word Wrap
- EOL
- Workbench: Color Theme

## Command palette

_F1_ or _Ctrl_ + _Shift_ + _P_: display command palette

- searchable
- shows shortcuts

Example commands:

- _Find_
- _Search: Find in Files_
- _Format Document_
- _Toggle line comment_ / _Toggle block comment_
- _Go to definition_ / _Peek definition_ (only for certain file types)
- _Rename symbol_ (only for certain file types)

## Multiple text cursors

- _Ctrl_ + _F2_: set multiple text cursors
- _Alt_ + click: set multiple text cursors

# VS Code for JavaScript

## VS Code - extensions for JavaScript

open the extensions view in the sidebar: fifth symbol on the left

extensions for JavaScript:

- Prettier (code formatter)
- ESLint (linter)

## Prettier

- code formatting according to strict rules
- for JavaScript, HTML, CSS
- shortcut: _Shift_ + _Alt_ + _F_

## ESLint

Linter with more functionality than VS Code's default linter

## Debugging JavaScript

possibilities:

- start a node.js debug terminal; run JS code there
- run a JavaScript file in the node.js debugger (configured via _.vscode/launch.json_)
- connect to a browser's debugger (configured via _.vscode/launch.json_)

accessible via the _Run_ tab in the sidebar

## Debugger configuration

debugger configuration via _.vscode/launch.json_

To create a debugger configuration file: In the _Run_ sidebar, select _create a launch.json file_

## Debugging with node.js

example _launch.json_ configuration entries for node.js:

```json
{
  "name": "Launch Node.js Program",
  "type": "node",
  "request": "launch",
  "skipFiles": ["<node_internals>/**"],
  "program": "${workspaceFolder}/index.js"
}
```

## Debugging in the browser

example _launch.json_ configuration entries for debugging in Chrome / Edge:

```json
{
  "name": "Launch Chrome",
  "type": "pwa-chrome",
  "request": "launch",
  "url": "http://localhost:8080",
  "webRoot": "${workspaceFolder}"
}
```

```json
{
  "name": "Launch Edge for React",
  "type": "pwa-msedge",
  "request": "launch",
  "url": "http://localhost:3000"
}
```

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
