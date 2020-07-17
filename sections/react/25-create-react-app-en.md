# Create-React-App

## Developing with node.js and npm

- node.js: JS-Runtime
  - running the local development server
  - unit tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ directory
  - configuration via _package.json_

## create-react-app

most-used method for generating React projects

run it via:

```bash
npx create-react-app todolist
```

or

```bash
npx create-react-app todolist --template typescript
```

see also: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Creates a simple React app which can be used as a starting point

many aspects are preconfigured:

- webpack and babel for building
- local development server
- unit testing framework jest
- SCSS and CSS modules

## default project structure

- `public/index.html`, `src/index.js`: entry points
- `App.js`, `App.css`: define the App component
- `node_modules`: dependencies

## development server and build

inside the project directory:

- `npm run start` (or `npm start`): starts the local development server
- `npm run build`: creates a build (for deployment)
