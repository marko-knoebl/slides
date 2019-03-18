# Create-React-App

## Developing with node.js and npm

- node.js: JS-Runtime
  - Running the testservr
  - unit-tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ - Directory
  - configuration via _package.json_

## create-react-app

most-used method for generating React projects: _create-react-app_

run it via:

```bash
npx create-react-app playground
```

see also: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Creates a simple React app which can be used as a starting point

many aspects are preconfigured:

- local development server
- unittesting framework jest
- webpack and babel
- SCSS and CSS modules

## default project structure

- `public/index.html`, `src/index.js`: entry points
- `App.js`, `App.css`: define the App component
- `node_modules`: dependencies

## test server and build

inside the project directory:

- `npm start`: starts the test server
- `npm run build`: creates a build (for deployment)
