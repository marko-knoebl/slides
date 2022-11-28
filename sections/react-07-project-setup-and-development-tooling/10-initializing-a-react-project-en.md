# Initializing a React project

## Developing with node.js and npm

**node.js**: JavaScript runtime  
(e.g. for running a local development server)

**npm**: package manager

## Initializing a React project

possibilities:

- **create-react-app** (most-used method)
- vite
- next.js (includes static site generation and server-side rendering)

## Initializing a React project

possible commands for initializing a project named "todolist":

```bash
npx create-react-app@latest todolist
npx create-react-app@latest todolist --template typescript
```

```bash
npm create vite@latest
```

```bash
npx create-next-app@latest
npx create-next-app@latest --ts
```

see also: https://reactjs.org/docs/create-a-new-react-app.html

## Initializing a React project

example:

```bash
npx create-react-app@latest todolist --template typescript
```

- uses the latest version of _create-react-app_
- creates a project in a new folder named _todolist_
- uses the _typescript_ project template

## Initializing a React project

many aspects can be preconfigured by the initializer:

- build system (e.g. webpack and babel)
- local development server
- unit testing framework
- CSS modules
- ...
