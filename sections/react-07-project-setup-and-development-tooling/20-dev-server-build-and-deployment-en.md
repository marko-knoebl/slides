# Dev server, build and deployment

## Dev server, build and deployment

inside the project directory:

- `npm run start` (or `npm start`): starts the local development server
- `npm run build`: creates a build (for deployment)

## Dev server

app runs on a local development server on the computer (typically _localhost:3000_)

automatic reloads on code changes

## Build and deployment

A React project can be hosted on any static hosting service

## Build

static build with create-react-app:

```bash
npm run build
```

minified and bundled app is created in the _build_ folder

## Deployment

simple options for trying out deployment options without login:

- https://netlify.com/drop (hosting for 1 hour, may fail on first try)
- https://tiiny.host/ (upload via a zip folder, hosting for a couple of days)
