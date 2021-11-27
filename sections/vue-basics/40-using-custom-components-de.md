# Verwenden von Komponenten

## Verwenden von Komponenten

Eigene Komponenten müssen im _components_-Eintrag der Elternkomponente aufgelistet werden:

```js
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
export default {
  components: { TodoItem, AddTodo },
  // ...
};
```

## Verwenden von Komponenten

Eigene Komponenten können im Template typischerweise auf zwei Arten geschrieben werden:

empfohlen:

<!-- prettier-ignore -->
```html
<TodoItem />
<VBtn>foo</VBtn>
```

alternativ:

<!-- prettier-ignore -->
```html
<todo-item />
<v-btn>foo</v-btn>
```

## Komponenten-Libraries

für Vue 2:

- vuetify
- bootstrap-vue
- element-ui

für Vue 3:

- _vuetify_-Release geplant für 2022-02
- _element-plus_ ist in der Beta-Phase
