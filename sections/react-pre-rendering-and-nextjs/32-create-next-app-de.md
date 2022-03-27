# Create-next-app

## Create-next-app

```bash
npx create-next-app@latest
```

```bash
npx create-next-app@latest --ts
```

## Projektstruktur

mögliche Projektstruktur:

- _pages_
- _public_: statische Assets
- _styles_
- _components_

## Entwicklungsserver

```bash
npm run dev
```

## Deployment mit node.js

um einen Produktionsbuild zu erstellen:

```bash
npm run build
```

um ihn zu starten:

```bash
npm run start
```

## Deployment auf einem statischen Server

nur möglich, wenn kein server-seitiges Rendering benötigt wird (also kein `getServerSideProps`)

Ändern des _build_-Scripts in _package.json_ auf: `next build && next export`

Ein statischer Build (im Ordner _out_) wird dann ausgeführt via:

```bash
npm run build
```

(siehe <https://nextjs.org/learn/excel/static-html-export>)
