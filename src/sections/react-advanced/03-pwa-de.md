# PWAs

Progressive Web Apps mit React

---

## PWAs

Progressive Web Apps: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

Mit `create-react-app` erstellte Anwendungen bieten dafür schon die Grundvoraussetzungen:

- Konfiguration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

---

## PWAs: Aktivierung

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

---

## PWAs: Konfiguration

Via `public/manifest.json`:

name, short_name

---

## PWAs: Logos konfigurieren

Hinzufügen von Logos in den Formaten `144x144px`, `192x192px` und `512x512px` (in manifest.json)

---

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

---

## PWA: Deployment auf Bitballoon

- `npm run build`
- dist-Ornder via drag&drop auf bitballoon.com (app.netlify.com/drop)
- edit name auswählen und kürzeren Namen wählen
- Manuell auf https wechseln - in Chrome am Desktop und Mobilgerät ausprobieren
