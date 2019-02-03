# Angular

## Was ist Angular?

- Eine der 3 großen JavaScript-UI-Libraries (neben React.js, vue.js)

## Grundlagen moderner JavaScript-UI-Libraries

- Deklarativ / datengetrieben
- Komponenten-Struktur

## Deklarativ / datengetrieben

- Im Hintergrund steht ein Datenmodell, das den gesamten Anwendungszustand abbildet
- Man ändert das Modell, das View wird von alleine (möglichst effizient) aktualisiert

## Komponenten-Struktur

- "eigene" HTML-Tags
- Datenfluss via Properties und Events
- Üblicherweise unidirektionaler Datenfluss (vom Eltern- zum Kindelement)

## Komponenten-Struktur: Tags und Properties

```xml
<todo-item [title]=" 'groceries' " [completed]="false">
</todo-item>
```

## Was macht Angular besonders?

- Verwendung fast ausschließlich mit TypeScript
- Beinhaltet als Framework einiges an zusätzlichen Tools:
  - Forms
  - Angular Router
  - HTTP-Kommunikation

## Geschichte von Angular

- AngularJS: Entwicklungsbeginn 2009
- Angular 2: Erschienen im September 2016 – Komplette Neuentwicklung
- Seither neue Releases ca alle 6 Monate
- Aktuell: Angular 7 (Oktober 2018)

## Beispiel: Datenmodell und -fluss in einer Todo-App
