# Routing und Pre-Rendering

## Routing und Pre-Rendering

- **client-seitiges Routing**: Navigieren zwischen verschiedenen Ansichten, ohne die React-Anwendung zu verlassen
- **Pre-Rendering**: beim ersten Laden der Seite erhält der Browser vorgerendertes HTML, um das Laden / Anzeigen zu beschleunigen

## Routing

Beispiel: gehe zu [reactjs.org](https://reactjs.org) und navigiere zwischen Seiten

Die Navigation zwischen den Seiten läuft flüssig - ohne dass die ganze Seite neu geladen werden muss

## Pre-Rendering

Beispiel 1:

Gehe zu [reactjs.org](https://reactjs.org) und warte, bis sich das React Devtools Icon des Browsers aktiviert - Es werden schon Inhalte angezeigt, bevor React bereit ist

Beispiel 2:

Deaktiviere JavaScript in den Einstellungen der Browser-Entwicklertools und besuche [reactjs.org](https://reactjs.org) - es werden Inhalte angezeigt, auch wenn Teile der Interaktivität nicht funktionieren (z.B. Dropdowns)

## Routing und Pre-Rendering

Tools:

- _react-router_: _Routing_
- _gatsby_: routing, _Pre-Rendering statischer Inhalte_
- _next.js_: routing, Pre-Rendering statischer und _dynamischer_ Inhalte
