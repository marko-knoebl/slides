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
