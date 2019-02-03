# Routing

## Routing

Nutzung von HTML5-Routen (client-seitig):
https://mywebsite.com/items/28

Früher / für ältere Browser:
https://mywebsite.com/#/items/28

Achtung: Server muss entsprechend konfiguriert sein und für /items/28 das gleiche zurückliefern wie für /

## Routing - Beispiel

Wir teilen unsere Todo-App in zwei Views auf:

- Liste aller Todos unter **/**
- Formular zum hinzufügen von Todos unter **/add**

## Routing - Grundlagen

Zuweisung von Komponenten zu Routen:

```ts
import { RouterModule } from '@angular/router';

imports: [
  ...,
  RouterModule.forRoot([
    { path: '', component: TodoListComponent },
    { path: 'add', component: AddFormComponent }
  ])
],
```

.forRoot() definiert Routen für die Root-Komponente – im Gegensatz zu .forChild()

## Routing - Grundlagen

`<router-outlet>`:

Die Anzeige der Inhalte erfolgt _unterhalb_ des `<router-outlet>`-Tags

## Routing - Redirects und Wildcards

Beispiel:

```ts
  { path: 'home', redirectTo: '' },
  { path: 'add-todo', redirectTo: 'add' },

  { path: '**', redirectTo: '' },
```

## Routing - Links

Der Link

```html
<a href="/add">add Todo</a>
```

würde zum neu Laden der Seite führen.

Stattdessen verwenden wir:

```html
<a routerLink="/add">add Todo</a>
```

## Routing - Navigation aus TypeScript

Auf den Angular-Router kann in TypeScript zugegriffen werden, um die aktuell aktive Route abzufragen / zu ändern:

```ts
// add-form.component.ts
import { Router } from '@angular/router';
[…]
  constructor(public router: Router) { }
    addTodo(todo: {description: string, done: boolean}) {
    this.todoService.addTodo(todo);
    this.router.navigate(['/']);
  }
```

## Routen-Parameter

Wir erstellen neue Routen der Form: `/todo/$todoId`.  
Dort soll jeweils ein einzelnes Todo-Item angezeigt werden

```
// app.module.ts
[…]
  { path: 'todo/:todoId', component: TodoDetailsComponent },
```

## Routen-Parameter

Die aktive Route bekommen wir über die Klasse ActivatedRoute, die wir mit Dependency Injection initialisieren.

ActivatedRoute.params ist ein Observable mit Routenparametern

```ts
// todo-details.component.ts
export class TodoDetailsComponent {
  todoId: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.todoId = params.todoId;
    });
  }
}
```

## Routing - mehr zum Thema

https://angular.io/guide/router
