# VS Code for JavaScript

## VS Code - extensions for JavaScript

open the extensions view in the sidebar: fifth symbol on the left

extensions for JavaScript:

- Prettier (code formatter)
- ESLint (linter)
- (Debugger for Chrome / Debugger for Firefox)

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
  "trailingComma": "all"
}
```

## ESLint

Linter with more functionality than VS Code's default linter

## Debugging client-side JavaScript

extensions:

- **Debugger for Chrome**
- Debugger for Firefox

these connect the browsers' built-in debuggers with VS Code's debugger UI

## Debugging client-side JavaScript

creating a config file: in the debugger sidebar, click on the gear symbol (_Configure or fix 'launch.json'_)

in _launch.json_:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome for React",
  "url": "http://localhost:3000"
}
```

## Debugging client-side JavaScript

Start debugging via F5 (local development server must already be running)
