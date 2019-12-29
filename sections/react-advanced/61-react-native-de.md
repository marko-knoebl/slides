# React Native

## React Native

Mit React Native können React Anwendungen für iOS- und Android-Geräte erstellt werden

## Möglichkeiten zur Entwicklung

- **Expo Snack**: online Editor
- **Expo CLI**: lokale Entwicklung mit wenig Setup
- **React Native CLI**: Entwicklung mit Xcode oder Android Studio - wird zum Veröffentlichen von Apps benötigt

## Expo: online Editor

[snack.expo.io](https://snack.expo.io)

## Expo: lokale Entwicklung

Installation von expo:

```bash
npm install -g expo-cli
```

Erstellen eines neuen Projekts:

```bash
expo init myproject
```

## Expo App

**Expo App**: zum Testen von Anwendungen während der Entwicklung, verfügbar in den Android und iOS app stores

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
const todoItemStyle = {
  margin: 5,
  padding: 5,
};

const TodoItem = ({ title, completed }) => (
  <View style={todoItemStyle}>{title}</View>
);
```

## Styling

Die style-Property kann auch ein Array von Objekten erhalten.

Einträge, die _falsy_ sind, werden ignoriert - damit können bedingte Stile umgesetzt werden

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[todoItemStyle, completed && completedStyle]}>
    {title}
  </View>
);
```

## Styling

Erstellen von _stylesheets_, die mehrere gruppierte Stile definieren:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: 'salmon',
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
    ]}>
    <Text style={[completed && styles.completedText]}>
      {completed ? 'DONE: ' : 'TODO: '}
      {title}
    </Text>
  </View>
);
```
