# Vue CLI

## Vue CLI

a tool for initializing a Vue project

## Developing with node.js and npm

- node.js: JS runtime
  - running the local development server
  - unit tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ directory
  - configuration via _package.json_

## Vue CLI

install and run:

```bash
npm install -g @vue/cli

vue create my-app
```

or run directly (without installing):

```bash
npx @vue/cli create my-app
```

## Vue CLI

Creates a simple Vue app which can be used as a starting point

many aspects can be set up automatically:

- webpack and babel for building
- local development server
- linter
- TypeScript support
- testing
- CSS tooling

## Default project structure

- _public/index.html_, _src/main.js_: entry points
- _src/App.vue_: defines the App component
- _node_modules_: dependencies

## Development server and build

inside the project directory:

- `npm run serve`: starts the local development server
- `npm run build`: creates a build (for deployment)
