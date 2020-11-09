# VS Code

## VS Code

<https://code.visualstudio.com>

open source IDE

independent of _Visual Studio_ itself

## VS Code: open folder

via _File_ - _Open Folder_

## VS Code: File explorer, split editor

## VS Code: Terminal

Open / close the terminal view via _ctrl_ + _\`_

Open an additional terminal via the _+_ Symbol

Terminals will run in the currently open folder

## VS Code: Configuration

Via _File - Preferences - Settings_

Is split into _User Settings_ and _Workspace Settings_

## VS Code: Configuration options

Recommendations:

- Accept Suggestions on Commit Character (Autocomplete on other keys than _Enter_): _deactivate_
- Tab Size: _2_ or _4_

Further options:

- Auto Save
- Format on Save
- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code - Commands

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

## VS Code - multiple text cursors

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
- shortcut: _Alt_ + _Shift_ + _F_

## Prettier

configuration:

e.g. via _.prettierrc.json_:

```json
{
  "singleQuote": true,
  "arrowParens": "always"
}
```

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

## VS Code for Python

**Python extension**

installation:

- open the extensions view in the sidebar: fifth symbol on the left
- install the extension named _Python_

configuration:

- open the command pallette (F1)
- search for "Python: select interpreter"
- Enter
- wait...
- choose the desired Python version

## VS Code - Running Python programs

green "Play" button in the editor view

or

_Debug_ - _Start Without Debugging (Ctrl + F5)_

## VS Code - PyLint

in order to see errors in VS Code: install the Python package _pylint_

```bash
pip install pylint
```

## VS Code - Auto formatting

We can auto format code via _Ctrl_ + _Shift_ + _F_

For Python code, install the Formatter _black_:

```bash
pip install black
```
