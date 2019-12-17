# Pre-Rendering

## Pre-Rendering

Tools wie **next.js** oder **gatsby.js** können React-Seiten vorrendern, bevor sie zum Client gesendet werden

Vorteile:

- schnellere erste Darstellung
- reduziert zusätzliche API-Aufrufe am Client
- einfachere Indexierung durch Suchmaschinen

## Pre-Rendering

Zugänge:

- Static Site Generation
- Server-side Rendering

## Pre-Rendering

**Static Site Generation**

- sinnvoll, wenn Daten sich nicht oft ändern (z.B. Blog Posts)
- bei Änderung von Daten muss die Website statisch neu generiert und deployed werden
- Daten, die sich oft ändern (z.B. Kommentare zu einem Blog Post) wären nicht Teil des Pre-Renderings

unterstützt von **next.js** und **gatsby.js**

## Pre-Rendering

**Server-side Rendering**

- beim Öffnen einer React-Seite wird diese am Server vorgerendert und zum Client gesendet
- benötigt _node.js_ am Server

unterstützt von **next.js**
