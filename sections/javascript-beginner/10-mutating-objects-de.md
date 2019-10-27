# Objektreferenzen und Abändern von Objekten

## Objektreferenzen und Abändern von Objekten

Was wird das folgende Programm ausgeben?

```js
let a = [1, 2, 3];
let b = a;
b.push(4);
print(a);
```

## Objektreferenzen und Abändern von Objekten

Der Code von eben ändert das Objekt `a` ab. Die beiden Variablen verweisen im Hintergrund auf das gleiche Objekt.

Eine Zuweisung (`let b = ...`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

## Objektreferenzen und Abändern von Objekten

Ändert man ein Objekt ab, muss man sicherstellen, dass die alte Version anderswo nicht mehr gebraucht wird.

Oft ist es sinnvoller, basierend auf einem existierenden Objekt ein anderes, abgeändertes Objekt zu erstellen

## Objektreferenzen und Abändern von Objekten

```js
let a = [1, 2, 3];
```

direktes Abändern des Objekts mittels `push`:

```js
a.push(4);
```

Erstellen eines neuen, abgeleiteten Objekts mittels `concat`:

```js
newA = a.concat([4]);
```

## Objektreferenzen und Abändern von Objekten

Ob eine Methode ein Objekt direkt abändert (wie `push`) oder ein neues Objekt zurückgibt (wie `concat`) muss in der Dokumentation nachgelesen werden.

Viele grundlegende Datantypen, wie `number`, `string`, `boolean`, ... können nicht direkt abgeändert werden - bei diesen müssen wir uns also keine Sorgen über ungewünschte Nebeneffekte machen.
