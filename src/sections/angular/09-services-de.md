# Services

## Services allgemein

Im allgemeinen: Services sind Teile einer Angular-Anwendung, die nicht direkt mit dem „Kerngebiet“ von Angular – dem View – zu tun haben.

Beispiele:

- Datenservice
- Loggingservice
- App-Konfiguration
- Hilfsmethoden

Services haben wenig Angular-spezifischen Code.

## Beispiel: Todo-Service

Wir lassen unsere Todos im Hintergrund von einem Service verwalten (und später von einem Server abrufen)

## Beispiel: Todo-Service

```bash
ng generate service todo
```

Dieser Befehl erstellt die Klasse `TodoService`.

## Services und Dependency Injection

Services werden in Angular nicht direkt von einer Komponente verwendet, sondern ihr mittels Dependency Injection im Constructor zur Verfügung gestellt. Das erleichtert unter anderem das Schreiben von Tests.

## Services und Dependency Injection

Beispiel:

```ts
// app.module.ts
import { TodoService } from './todo.service';
[…]
  providers: [TodoService]
[…]
```

```ts
// app.component.ts
constructor(public todoService: TodoService) {
  …
}
```

## Services und Dependency Injection

Wir geben an, dass wir für unsere Komponente eine Instanz der Klasse _TodoService_ benötigen.

Angular erstellt im Hintergrund eine Instanz davon und _injiziert_ diese in jede Komponente, die sie benötigt.
