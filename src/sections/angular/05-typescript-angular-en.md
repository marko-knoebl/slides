# TypeScript for Angular

## properties in the constructor

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

// is short for:
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## decorators

Decorators enable us to change functions or classes after they have been created.

This is done via a function - the decorator

```ts
// Hypothetical cache-decorator which caches the
// results of previous function calls
import { cache } from 'cache';

@cache
function getResults() {
  ...
}
```

## decorators in Angular

In Angular decorators are used in order to add metadata to a class:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Anthony';
}
```
