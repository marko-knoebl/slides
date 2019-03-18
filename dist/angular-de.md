# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Agenda

- Einführung in Angular 7 und erste Komponenten
- Einführung in ES2015+ und TypeScript
- Komponenten – Templates, Properties und Events
- Forms
- Daten-Services
- Server-Kommunikation
- Routing
- Material Design - Komponenten

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

# Angular - Grundlagen

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Angular CLI
  - Ausführen des Testservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## Angular CLI

Meistgenutzte Methode zum Erstellen von Angular-Anwendungen: _Angular CLI (ng)_

setup:

```bash
npm install -g @angular/cli
```

siehe auch: https://github.com/angular/angular-cli/wiki

## Angular CLI: neues Projekt

```bash
ng new playground
```

Angular CLI installiert im Hintergrund einige Abhängigkeiten und legt diese im Ordner _node_modules_ ab.

## Angular CLI: Konfiguration

- add Angular routing?
- stylesheet format?

## Angular CLI: Testserver

Im Projektordner:

```bash
ng serve --open
```

## Angular CLI: Befehle

- `ng new $projectname`: Erstellt neues Angular-Projekt
- `ng serve`: Startet den Testserver
- `ng generate component $name`: Erstellt eine neue Komponente
- `ng generate service $name`: Erstellt ein neues Service
- `ng build --prod`: Führt einen Production-Build aus (im dist-Ordner)

## Standard Projektstruktur

Angular CLI erstellt umfangreiche Projektstruktur

Uns interessiert hauptsächlich der Ordner _src/app_

## Standard Projektstruktur

- **package.json**: npm-Konfiguration
- **karma.conf, protractor.conf**: Tests
- **tsconfig.json**: Typescript-Konfiguration
- **src/index.html**: Einstiegspunkt
- **src/polyfills.ts**: Polyfills für „ältere“ Browser
- **src/app/**: eigentliche Angular-App

## src/polyfills.ts

- Wird für Unterstützung älterer Browser benötigt (zB IE9-IE11)
- Zum testen auf / deployen für ältere Browser: entsprechende Zeilen „einkommentieren“ und entsprechende Abhängigkeiten mittels npm installieren
- Details: https://angular.io/guide/browser-support

## Komponentenstruktur

Mit angular-cli (ng) erstellte Komponenten gliedern sich in drei Dateien, zB:

- app.component.html (Template)
- app.component.css (auf Komponente beschränkter Stil)
- app.component.ts (Programmcode)

## Beispiel: Änderungen an der Komponente

Aufgaben

- Die Komponente soll „Hallo, $name“ ausgeben, wobei der Name in der .ts-Datei definiert wird

## Weitere Beispiele

- `<app-time>`-Komponente, die die aktuelle Uhrzeit anzeigt
- `<app-roulette>`-Komponente, die eine Zufallszahl von 0-36 anzeigt

## ng build

Mittels

```bash
ng build --prod
```

führen wir einen Production-Build aus

# ES2015+

## Modernes JavaScript

## JavaScript-Standardisierung

JavaScript wird unter dem Namen _ECMAScript_ (kurz ES) standardisiert

## JavaScript: Versionen

- Von allen Browsern unterstützt: ES5 (2009 veröffentlicht)
- Nächste große Version: _ES2015_ (oder ES6)
- Seither: jährliche kleinere Änderungen (aktuell: ES2018)

## JavaScript: Versionsunterstützung

- Übersicht: siehe http://kangax.github.io/compat-table/es6/
- In der Praxis: Modernes JavaScript wird in ES5 transpiliert (mittels Babel, webpack)

## Wichtige Neuerungen in ES2015

## Module & Imports

- Möglichkeit, Funktionalität aus anderen js-Dateien zu importieren – kein globaler Namespace mehr
- Benötigt einen Bundler, z.B. webpack

```js
// user.js
export class User {
  ...
}
```

```js
// main.js
import { User } from 'user.js';
```

## Module & Imports

```js
// User.js
// es kann 1 default export geben
export default class User {
   ...
}
```

```js
// main.js
import User from 'User.js';
```

## let

- Neue Alternative zu var – mit leicht anderem Scoping
- Scope: umgebende geschweifte Klammern (statt umgebender Funktion)

```js
if (true) {
  let a = 3;
}
console.log(a); // ReferenceError
```

## const

Deklariert eine Variable, die nicht mehr neu zugewiesen werden kann.  
Das bezeichnete Objekt selbst kann allerdings modifiziert werden

```js
const names = ['Alice', 'Bob', 'Claire'];
names = ['Andrew', 'Bob', 'Claire']; // ungültig!
names[0] = 'Andrew'; // gültig
```

## Destrukturierende Zuweisung

```js
let a = 1;
let b = 2;
[a, b] = [b, a];

const [result, errors] = someComputation();
```

## Pfeilfunktionen

- Kurzschreibweise für anonyme Funktionen
- Lässt _this_ unverändert (überschreibt es nicht)

```js
let multiply = (a, b) => {
  return a * b;
};

let multiply = (a, b) => a * b;
```

## Pfeilfunktionen

wenn es genau einen Parameter gibt: Parameterklammern optional

```js
const square = a => a * a;
```

wenn direkt ein Objekt zurückgegeben werden soll: mit runden Klammern umschießen

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## Klassen

Ersetzen die alten Konstruktorfunktionen und Prototypen

## Klassen

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  hello() {
    return `My name is ${this.firstName}`;
  }
}
```

## Klassen und Vererbung

```js
class User extends Person {
  constructor(firstName, lastName, userName) {
    // ruft Person.constructor auf
    super(firstName, lastName);
    this.userName = userName;
  }
}
```

## Array-Iteration (for ... of)

Über die Einträge in einem Array iterieren:

```js
let names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## Spread Syntax (Arrays und Objekte)

```js
let squares = [1, 4, 9];
let moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
let person = { firstName: 'Joe', lastName: 'Doe', age: 31 };
let newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Template-Strings

- Neue Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
let name = 'Anton';
let greeting = `Hallo, ${name}!
                Das ist ES2015!`;
```

## Standardparameter in Funktionen

In Funktionen können nun Standardparameter definiert werden:

```js
let join = (strings, separator='') => {
  ...
}
```

# TypeScript

## TypeScript

= Obermenge von JavaScript mit Erweiterungen:

- **Statische Typisierung**
- Public / Private Properties
- Decorators

## Statische Typisierung

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Autovervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Statische Typisierung

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Typsystem: Variablen

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## Typsystem: Arrays

```js
let names: Array = ['Anna', 'Bernhard'];
```

genauer:

```js
let names: Array<string> = ['Anna', 'Bernhard'];
```

alternative Schreibweise:

```ts
let names: string[] = ['Anna', 'Bernhard'];
```

## Typsystem: Funktionen

```ts
function repeatString(
    text: string,
    times: number): string {
  return ...;
}
```

```ts
const repeatString = (
  text: string,
  times: number
): string => {...};
```

## Typsystem: void

Void: umfasst _undefined_ und _null_

```ts
const warnUser = (): void => {
  alert('warning!');
};
```

## Typsystem: any

Any: lässt alle Typen zu

```ts
let myInput: any = document.getElementById('myinput');
console.log(myInput.value);
```

## Typsystem: Type assertions

```ts
(window as any).myGlobalVariable = 'foo';
```

## Typsystem: Types & Interfaces

Interfaces: beschreiben die Struktur eines Objekts / einer Klasse genauer  
z.B.: `TodoInterface`, `PersonInterface`

Types: Ähnlich wie Interfaces, nur auch auf Strings, Arrays, ... anwendbar

Types bieten im wesentlichen mehr Funktionalität als Interfaces

https://stackoverflow.com/a/52682220/

## Typsystem: Types

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<TodoType>;
```

## Types bei Objekten

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // Methode
  toggle: (id: number) => void;
};
```

## Types bei Objekten

```ts
class AdvancedTodo implements TodoType {
  ...
}
```

## Extends

Mittels `&`:

```ts
type ActionType = {
  type: string;
  payload?: object;
};

type AddTodoActionType = ReduxActionType & {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
};
```

## Union Types

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## Generics

Allgemeine Typendeklaration, bei der beim Aufruf nähere Informationen spezifiziert werden können

## Generics

```ts
function reducer<MyState, MyAction>(
  state: MyState,
  action: MyAction
): MyState {
  ...
}

// Verwendung

// newState hat automatisch den richtigen Typ
const newState = reducer<TodoState, TodoAction>(
  myTodoState,
  myTodoAction
);
```

## Generics

```ts
class Component<Props, State> {
  props: Props;
  state: State;

  setState: (newState: Partial<State>) => void;
}
```

Verwendung:

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
}
```

## Private & Public Properties

```ts
class Clock {
  private formatTime(time) {
    return ...
  }
  public start() {
    ...
  }
}
```

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

# Angular - Grundlagen II

## VS Code - Plugins

Empfehlung

- Angular Snippets (by John Papa)
- Angular Language Service
- TSLint

## Templatesprache: Properties

Dynamisches Setzen von Properties:

```xml
<input type="number" [value]="1/3">
```

## Properties: Aufgaben

- Zeige ein zufälliges Bild an. Verwende dazu:

```js
const getImgUrl = () =>
  'https://picsum.photos/200/300?image=' +
  Math.floor(Math.random() * 100);
```

## Templatesprache: \*ngFor

Mit _\*ngFor_ können wir HTML-Elemente wiederholen:

```html
<div *ngFor="let todo of todos">
  {{ todo.title }}
</div>
```

\*ngFor wiederholt das Element, auf das es angewendet wird (hier: das div-Element)

## Templatesprache: \*ngFor

Optional können wir mit Hilfe der index-Variable mitzählen:

```html
<div *ngFor="let todo of todos; index as i">
  {{i}}: {{ todo.title }}
</div>
```

## Templatesprache: \*ngFor

Beispiel: Rating-Komponente, die Sterne anzeigt (mit zunächst unveränderlicher Anzahl)

## Templatesprache: \*ngIf

Mit _\*ngIf_ können wir ein Element unter bestimmten Bedingungen ein- oder ausblenden.

Beispiele:

```html
<div *ngIf="item.importance >= 3">{{ item.text }}</div>
```

## Templatesprache: Klassen

Wir können CSS-Klassen dynamisch zuweisen:

```html
<div [class.important]="isImportant()">…</div>

<span [class.negative]="item.amount < 0">
  {{ item.amount }}
</span>
```

## Templatesprache: Klassen

Weitere Möglichkeiten:

```html
<div [ngClass]=
  "{important: isImportant(), negative: item.amount < 0}">
  ...
</div>
```

## Templatesprache: Stile

Für jede Komponente können wir CSS-Stile festlegen. Diese betreffen dann nur eine Komponente.

Dazu gibt es zwei Möglichkeiten in der Konfiguration:

`styleUrls: ['./app.component.css']`  
oder  
`styles: ['h1 {..} …']`

## Templatesprache: Stile

In Komponentenstilen bezieht sich der besondere `:host`-Selektor auf das Komponententag selbst.

```css
:host {
  display: block;
}
```

## Templatesprache: Stile

Für einzelne HTML-Elemente können wir direkt mit einer Angular-eigenen Syntax Stile via Properties setzen:

```html
<div [style.color]="getTextColor()">…</div>
<span [stlye.font-size.px]="getFontSize()">…</span>
<div [style.width.%]="100 / n">…</div>
```

## Templatesprache: Stile

Beispiel: Wir erstellen ein `<div>`-Element, dessen Schriftgröße zufällig festgesetzt wird

## Templatesprache: Pipes

Pipe = im wesentlichen eine Funktion, die im Template zur string-Formatierung zur Verfügung steht

## Templatesprache: Pipes

Beispiele:

- `Today is {{ today | date }}`
- `My name is {{ name | uppercase }}`
- `The price is {{ price | number:'1.2-2'}}`
- `Debugging information: {{ todo | json }}`
- `Total amount: {{total | currency:'EUR':'symbol':'1.2-2'}}`

## Lokalisierung von Pipes

angular.json:

`...targets.build.configurations.de.i18nLocale` = `"de"`

`...targets.serve.configurations.de.browserTarget` = `"$projectname:build:de"`

im Terminal:

`ng serve --configuration=de`

## Templatesprache: Templatevariablen

Mit Templatevariablen können wir direkt auf Elemente aus dem Template zugreifen. Dazu verwenden wir das #-Zeichen.

```html
Todo: <input #newtodo>
<button (click)="addTodo(newtodo.value)">
  Add
</button>
```

## Templatesprache: Events

Wir können alle Standard-DOM-Events über die folgende Syntax überwachen:

```html
<div (eventname)="eventHandler()">…</div>
```

Liste von Standard-DOM-Events:
https://www.w3schools.com/jsref/dom_obj_event.asp

## Templatesprache: Events

```html
<button (click)="increase()"> + </button>

<input (keydown)="onKeyDown()">
```

## Standard-Events: Event-Objekt

Das JavaScript Event-Objekt können wir über den Parameter mit dem Namen $event erhalten.

```html
<input (keydown)="onKeyDown($event)">
```

```js
onKeyDown(event: KeyboardEvent) {
  event.preventDefault();
  this.key = event.key;
}
```

## Standard-Events: Event-Filter

```html
<input (keyup.enter)="onEnter()">
```

Mit der obigen Syntax können Events auf bestimmte Kategorien beschränkt werden

## Beispiele

- counter-Komponente
- diashow-Komponente

# Eigene Komponenten: Properties & Events

## Eigene Properties & Events

Properties und Events stellen die wichtigsten Mechanismen dar, mit denen Komponenten in SPAs miteinander interagieren.

In Angular verwendet man auch die Begriffe:

- input = Property
- output = Event

## Eigene Properties

Beispiel Ratingkomponente

Wir erstellen eine Komponente, die eine bestimmte Anzahl an Sternen anzeigt, welche sich über eine Property steuern lässt:

```html
<app-rating [stars]="4"></app-rating>
```

## Eigene Properties

Wir verändern _rating.component.ts_ folgendermaßen:

zunächst importieren wir den Input-Decorator:

```js
import { Input } from '@angular/core';
```

## Eigene Properties

weiters setzen wir in der Komponentenklasse Typinformationen fest:

```js
  @Input() stars: number;
```

## Eigene Properties

aus dem Template rufen wir die folgende Hilfsmethode auf:

```js
getStarString = () => {
  return '*'.repeat(this.stars);
};
```

## Properties: weitere Beispiele

- diashow - Komponente (mit Properties)
- roman-number - Komponente
- playing-card - Komponente

## Eigene Events

Definition eigener Events:

- Eventname
- evtl zugehöriger Parameter (zB Zahl, String, oder auch ein komplexeres Objekt) - dieser wird im _$event_-Parameter übergeben
- für den zugehörigen Parameter muss ein Typ festgelegt werden (kann auch _void_ sein)

## Eigene Events - Definition

```js
import { Output, EventEmitter} from '@angular/core';

[...]

  @Output() tick: EventEmitter<number> =
    new EventEmitter<number>();

  [...]

  this.tick.emit(this.remainingTime);
```

## Eigene Events - Beispiel

Timer mit Events: start, tick, end

Nutze diese Events für Beispielnachrichten:

- "Der Timer ist gestartet"
- "Nur noch 3 Sekunden"
- "Zeit abgelaufen"

## Eigene Events - Beispiele

```html
<app-timer
  (start)="displayStartMessage()"
  (tick)="updateTime($event)"
  (end)="displayEndMessage()">
</app-timer>
```

## Eigene Events - Beispiele

Beispiel: rating

Wir ändern die rating-Komponente, sodass durch einen Klick auf einen Stern ein entsprechendes Event an die Elternkomponente übergeben wird

```html
<app-rating (change)="onRatingChange($event)"></app-rating>
```

## Beispiel: Todo-App

# Inputs & Forms

## Inputs & Forms - Grundlagen

Um Forms und Inputs mit Angular nutzen zu können, müssen wir zunächst in app.module.ts das FormsModule importieren:

```js
import {FormsModule} from '@angular/forms';
  …
  imports: [
    BrowserModule,
    FormsModule
  ],
```

## Inputs: ngModel

Mit Hilfe von ngModel können wir Änderungen an einem Input überwachen lassen

## Inputs: ngModel

Einfaches (theoretisches) Beispiel mit standard HTML-Attributen und Templatevariablen:

```html
<input ngModel #myInput required minlength="3"><br>
value: {{ myInput.value }} <br>
valid: {{ myInput.validity.valid }}
```

## Inputs: ngModel

Üblicherweise greift man nicht auf das input-Element selbst zu, sondern auf dessen ngModel-Controller:

```html
<input ngModel #myInput="ngModel" required minlength="3"> <br>
value: {{ myInput.value }} <br>
valid: {{ myInput.valid }} <br>
touched: {{ myInput.touched }} <br>
pristine: {{ myInput.pristine }}
```

## Inputs: ngModel

```html
<input ngModel #myInput="ngModel" required minlength="3">
```

Was passiert hier?

- Mit _ngModel_ bringen wir Angular dazu, den Inhalt des Inputs zu überwachen.
- Mit `#myInput="ngModel"` setzen wir dann eine Variable, die auf das entsprechende Datenmodell verweist.
- Zu beachten: Der Wert rechts (`ngModel`) ist fest vorgegeben, den linken Namen (`myInput`) können wir selbst bestimmen.

## Inputs: ngModel

Folgende Eigenschaften des ngModel-Controllers können wir überwachen:

- **value**: Wert – dieser ist oft automatisch vom passenden Typ (zB bei type="number" oder type="checkbox" – nicht aber bei type="date")
- **valid**
- **touched**: ändert sich auf true, wenn der Fokus in das Feld gesetzt wird und dann wieder auf etwas anderes
- **pristine**: ändert sich auf false, sobald der Wert zum ersten Mal geändert wird.

## Übung zu ngModel: Passwort

Wir setzen eine Passworteingabe um:

- Es soll zwei Eingabefelder geben, deren Inhalt wir mit ngModel überwachen.

- Solange die Eingabefelder unterschiedliche Werte haben, soll der zugehörige OK-Button auf disabled gesetzt sein

- Solange die Eingabefelder unterschiedliche Werte haben und ins zweite Feld schon etwas eingegeben wurde, soll darunter (in einem extra `<div>`) eine Warnung angezeigt werden.

## ngModel und two-way data binding

Bisher haben wir ngModel nur im Template – mit Hilfe von Templatevariablen – verwendet.

Wir können auch eine Bindung auf eine im .ts-File definierte Variable herstellen:

```ts
// app.component.ts
myVar = 'abc';
```

```html
<!-- app.component.html -->
myVar: <input [(ngModel)]="myVar">
```

## Forms in Angular

Neues Event in Angular: ngSubmit

```html
<form (ngSubmit)="logForm(firstName.value, lastName.value)">
  <input name="fn" ngModel #firstName="ngModel" required>
  <input name="ln" ngModel #lastName="ngModel" required>
  <button>Submit</button>
</form>
```

## Forms in Angular

Neuer Forms-Controller: ngForm (analog zu ngModel für input-Elemente)

```html
<form #f="ngForm" (ngSubmit)="logForm(f.value)">
  <input name="firstName" ngModel>
  <input name="lastName" ngModel>
  <button>Submit</button>
</form>
```

f.value beinhaltet ein Objekt der Form:

```js
{ "firstName": "John", "lastName": "Smith" }
```

## Form-Attribute: Überblick

`<form ngForm …>`: fügt Controller zu einem form hinzu (eigentlich automatisch, daher nicht wirklich notwendig)

`<input ngModel …>`: fügt Controller zu einem input hinzu

`<form ngForm #f="ngForm" …>`: "exportiert" den Form Controller als Templatevariable

`<input ngModel #firstName="ngModel" …>`: "exportiert" den Input Controller als Templatevariable

## Forms: Beispiele

- Formular zum Hinzufügen von Todos

- Formular mit Suchfunktion und two-way data binding

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

# Material Design - Komponenten

Nutzung vorgefertigter Komponenten

## Material - Komponenten

Von Google bereitgestellte Angular-Komponenten im Material design – Stil

Einstieg / Setup: https://material.angular.io – Schritte 1, 2, 4

Einbinden konkreter Komponenten - Schritt 3

## Material - Übung

Wir stellen die Todo-App auf Material Design um

<img src="assets/todolist.png" style="height: 16em">

