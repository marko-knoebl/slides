# Stylesheets

## Stylesheets

Möglichkeit, vorgefertigte Stile einzubinden und in mehreren HTML-Dokumenten zu übernehmen

Stylesheets können aus vorgegebenen Libraries eingebunden werden (z.B. _Bootstrap_) oder selbst erstellt werden

## Einbindung

Einbindung meist im head, z.B.:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
/>
```

## CSS Resets

Resets: Stylesheets, die grundlegende Stile über verschiedene Browser hinweg vereinheitlichen:

- _normalize.css_: [website](https://necolas.github.io/normalize.css/), [CDN](https://cdn.jsdelivr.net/npm/normalize.css/normalize.css)
- _sanitize.css_: basiert auf normalize - [website](https://csstools.github.io/sanitize.css/), [CDN](https://cdn.jsdelivr.net/npm/sanitize.css/sanitize.css)
- _reboot_: basiert auf normalize, dient als Basis für Bootstrap - [website](https://getbootstrap.com/docs/4.0/content/reboot/), [CDN](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-reboot.css)

CDN: Content Delivery Network - Services, die CSS- und JS-Libraries hosten

## Semantische CSS-Starter

- [water.css](https://watercss.kognise.dev/)
- [new.css](https://newcss.net)
- [simple.css](https://simplecss.org/)

## CSS Libraries

CSS Libraries:

- _Bootstrap_: weit verbreitete CSS-Library mit vielen verfügbaren Themes - [website](https://getbootstrap.com/), [CDN für CSS](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.css), [CDN für JS](https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.js)
- _Tailwind_ - [website](https://tailwindcss.com/), [CDN](https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css)

<!--

https://picnicss.com/ (Einträge in der Navbar sind buttons, kein JS)
https://milligram.io/ (keine navbar, verwendet class="button")
http://getskeleton.com/ (keine navbar)
https://github.com/mdipierro/no.css
https://getbootstrap.com/
-->
