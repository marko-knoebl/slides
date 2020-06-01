# Pre-Rendering

## Pre-Rendering

**Pre-Rendering**: beim ersten Laden der React-Anwendung erhält der Browser vorgerendertes HTML, um das Laden / Anzeigen zu beschleunigen

Vorteile:

- schnellere erste Darstellung
- reduziert zusätzliche API-Aufrufe am Client
- einfachere Indexierung durch Suchmaschinen

## Pre-Rendering

Beispiel 1:

Gehe zu [reactjs.org](https://reactjs.org) und warte, bis sich das React Devtools Icon des Browsers aktiviert - Es werden schon Inhalte angezeigt, bevor React bereit ist

Beispiel 2:

Deaktiviere JavaScript in den Einstellungen der Browser-Entwicklertools und besuche [reactjs.org](https://reactjs.org) - es werden Inhalte angezeigt, auch wenn Teile der Interaktivität nicht funktionieren (z.B. Dropdowns)

## Zugänge

- Static Site Generation (Pre-Rendering statischer Inhalte)
- Server-side Rendering (Pre-Rendering dynamischer Inhalte)

## Static Site Generation

- sinnvoll, wenn Daten sich nicht oft ändern (z.B. Blog Posts)
- bei Änderung von Daten muss die Website statisch neu generiert und deployed werden
- Daten, die sich oft ändern (z.B. Kommentare zu einem Blog Post) wären nicht Teil des Pre-Renderings

## Server-side Rendering

- beim Öffnen einer React-Seite wird diese am Server vorgerendert und zum Client gesendet
- benötigt _node.js_ am Server

## Tools

- _gatsby_: Static Site Generation
- _next.js_: Static Site Generation, Server-side Rendering
