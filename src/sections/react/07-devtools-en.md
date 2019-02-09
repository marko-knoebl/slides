# Development tools for React

## React Developer Tools

https://github.com/facebook/react-devtools

- display component tags in an inspector
- show state and props
- highlight changes to state and props
- highlight updates / rerenderings of components

## Debugging in VS Code

Extensions:

- **Debugger for Chrome**
- Debugger for Firefox

## Debugging in VS Code: configuration

creating config file: in the debugger sidebar, click on the gear symbol (_Configure or fix 'launch.json'_)

in _launch.json_:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}"
}
```

## Debugging in VS Code: starting

Via _F5_
