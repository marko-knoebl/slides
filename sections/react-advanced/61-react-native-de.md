# React Native

## React Native

Mit React Native können React Anwendungen für iOS- und Android-Geräte erstellt werden

## Möglichkeiten zur Entwicklung

- **Expo**: einfache Option, schneller Einstieg
- **React Native CLI**: ermöglicht Integration nativer Module (Java / Objective-C)

## Expo Tools

- **Expo Snack**: online Editor
- **Expo CLI**: lokale Entwicklung
- **Expo App**: Emulator für live-Testen auf Android / iOS (erhältlich in App Stores)

## Expo Snack

<https://snack.expo.io>

Optionen:

- Web-Version ausführen
- Android / iOS online emulieren (begrenzte Kapazität)
- am lokalen Gerät ausführen (via Expo App)

## Expo CLI

Installation:

```bash
npm install -g expo-cli
```

Erstellen eines neuen Projekts:

```bash
expo init myproject
```

Ausführen eines Projektes (öffnet Dashboard auf _localhost:19002_):

```bash
npm run start
```

## Expo CLI

Ausfürhen auf einem Gerät:

- Auswählen von _tunnel_
- warten
- Scannen des QR Codes mit der Expo App

## React Native Komponenten

- View (=div)
- Text
- Image
- Button
- TextInput
- ScrollView

[ausführlichere Liste](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

## React Native Komponenten

Beispiele:

```js
<Button title="press me" onPress={handlePress} />
```

```js
<TextInput value={myText} onChangeText={setMyText} />
```

## Styling

In React Native geschieht Styling über die _style_-Property:

```js
const TodoItem = ({ title, completed }) => (
  <View style={{ margin: 5, padding: 8 }}>
    <Text>{title}</Text>
  </View>
);
```

## Styling

Die style-Property kann auch ein Array von Objekten erhalten (Einträge, die _falsy_ sind, werden ignoriert)

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[
      { padding: 8, backgroundColor: 'lightcoral' },
      completed && { backgroundColor: 'lightgrey' },
    ]}
  >
    <Text>{title}</Text>
  </View>
);
```

## Styling

Erstellen von _stylesheets_, die mehrere gruppierte Stile definieren:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    padding: 8,
    backgroundColor: 'lightcoral',
  },
  completedView: {
    backgroundColor: 'lightgrey',
  },
  completedText: {
    textDecoration: 'line-through',
  },
});
```

## Styling

Verwendung von Stylesheets:

```js
const TodoItem = ({ title, completed, onToggle }) => (
  <View
    style={[
      styles.todoItem,
      completed && styles.completedView,
    ]}
  >
    <Text style={[completed && styles.completedText]}>
      {completed ? 'DONE: ' : 'TODO: '}
      {title}
    </Text>
  </View>
);
```

## Plattformspezifischer Code

Möglichkeit 1 (einfache Fälle):

```js
import { Platform } from 'react-native';
if (Platform.OS === 'web') {
  // 'web' / 'ios' / 'android'
}
```

Möglichkeit 2 (Plattform-spezifische Komponenten):

- `AddTodo.web.js`
- `AddTodo.ios.js`
- `AddTodo.android.js`
