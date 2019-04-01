# Objektorientierte Programmierung (ab ES2015)

## OOP (neu)

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  accelerate() {
    console.log('wroom!');
  }
}
```

## OOP (neu)

Vererbung

```js
class LuxuryCar extends Car {
  openRoof() {}
}
```
