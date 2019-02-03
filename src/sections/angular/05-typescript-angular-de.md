# TypeScript für Angular

## Properties im Constructor

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

// Kurzform für:
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## Decorators

Mit Decorators lassen sich Funktionen und Klassen nach ihrer Erstellung mittels einer Funktion – dem Decorator – verändern  
Beispiel:

```ts
// Hypothetischer cache-Decorator,
// der die Resultate eines Funktionsaufrufs speichert
import { cache } from 'cache';

@cache
function getResults() {
  ...
}
```

## Decorators in Angular

In Angular werden Decorators verwendet, um Metadaten zu einer Klasse zu ergänzen:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Anton';
}
```
