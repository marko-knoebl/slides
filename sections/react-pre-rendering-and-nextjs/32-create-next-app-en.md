# Create-next-app

## Create-next-app

```bash
npx create-next-app@latest
```

```bash
npx create-next-app@latest --ts
```

## Project structure

possible project structure:

- _pages_
- _public_: static assets
- _styles_
- _components_

## Development server

```bash
npm run dev
```

## Deployment with node.js

to build a production version:

```bash
npm run build
```

to run it (on the server):

```bash
npm run start
```

## Deployment to a static server

possible only if no server-side rendering is needed (i.e. no `getServerSideProps`)

change the _build_ script in _package.json_ to: `next build && next export`

then build the static version (to the _out_ folder) via:

```bash
npm run build
```

(see <https://nextjs.org/learn/excel/static-html-export>)
