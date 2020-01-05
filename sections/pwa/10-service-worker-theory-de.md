# Service worker

## Service worker

Service worker sind client-seitige Proxies zwischen Webbrowser und Server.

Service worker können Resourcen cachen und sie entweder aus dem Netzwerk oder dem internen Cache abrufen.

## Service worker

Es läuft zu jeder Domain / registrierten URL genau ein ServiceWorker

Service worker sind besondere Web-Worker, daher:

- kein direkter Zugriff auf das DOM
- Kommunikation mit Hauptthread mittels postMessage

## Browser Unterstützung

[caniuse](https://caniuse.com/##feat=serviceworkers)

Serviceworker werden unterstützt ⇒ ES2015 wird unterstützt

## Verwandthe Technologien

- fetch (Netzwerkanfragen senden)
- cache (Netzwerkanfragen cachen)
