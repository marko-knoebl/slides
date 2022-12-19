# Entwicklungsserver, Build und Deployment

## Entwicklungsserver, Build und Deployment

Im Projektordner:

- `npm run start` (oder `npm start`): Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

## Entwicklungsserver

Anwendung läuft auf lokalem Entwicklungsserver auf dem Computer (typischerweise _localhost:3000_)

automatisches Neuladen bei Code-Änderungen

## Build und Deployment

Eine React-Anwendung kann bei beliebigen statischen Hosting-Services gehostet werden

## Build

Build mit create-react-app:

```bash
npm run build
```

Minifizierter und Optimierter Build wird im _build_-Ordner generiert

## Deployment

einfache Test-Deployments ohne Login:

- https://netlify.com/drop (Hosting für 1 Stunde, kann beim ersten Versuch fehlschlagen)
- https://tiiny.host/ (Upload via a zip-Ordner, Hosting für einige Tage)
