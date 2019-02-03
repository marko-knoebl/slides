# HTTP

## HTTP

Verschiedene Möglichkeiten, um http im Browser nutzen zu können:

- XMLHttpRequest
- jQuery
- Fetch

Standard in Angular: httpClient – Modul mit "Observables"

## HTTP in Angular: Observables

Observables in Angular: Möglichkeit, asynchron Daten abzufragen – Ähnlich zu _Promises_.

## HTTP in Angular: Observables

```ts
this.http
  .get('https://jsonplaceholder.typicode.com/todos')
  // .subscribe() … ähnlich zu .then() bei promises
  // wir senden einen Request, wenn dieser beantwortet wird,
  // wird die Pfeilfunktion aufgerufen und das Resultat
  // unter .todos gespeichert
  .subscribe(response => {
    this.todos = response;
  });
```

## HTTP in Angular: Fehlerbehandlung

Mittels zweitem Argument für `subscribe`:

```ts
this.http.get('...').subscribe(
  response => {
    this.todos = response;
  },
  error => {
    this.error = error;
  }
);
```

## HTTP in Angular: Einbindung

```ts
// app.module.ts:
import { HttpClientModule } from '@angular/common/http';
…
imports: […, HttpClientModule]

// my-service.ts:
import { HttpClient } from '@angular/common/http';
…
```

## Beispiel: TODO-Daten vom Server

Wir wollen Daten von https://jsonplaceholder.typicode.com/todos erhalten.
