# Initializing a React project

## Developing with node.js and npm

- node.js: JS-Runtime
  - running the local development server
  - unit tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ directory
  - configuration via _package.json_

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

many aspects can be preconfigured by the initializer:

- build system (e.g. webpack and babel)
- local development server
- unit testing framework
- CSS modules
- ...

## Create-react-app: default project structure

- _package.json_: configuration, list of direct dependencies
- _node_modules_: dependencies
- _public/index.html_, _src/index.tsx_: entry points
- _src/index.css_: global style declarations
- _src/App.tsx_, _src/App.css_: define the App component

## Create-react-app: development server and build

inside the project directory:

- `npm run start` (or `npm start`): starts the local development server
- `npm run build`: creates a build (for deployment)

## Create-react-app: development server

note:

sometimes the development server will keep displaying an error even though it has been fixed

stop the server (ctrl-C) and restart it to fix this
