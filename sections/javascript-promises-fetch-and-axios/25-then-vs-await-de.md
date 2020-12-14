# Then vs. await

## Then vs. await

Vorteile von `await`:

- Code ähnelt "synchronem" code
- einfachere Fehlerbehandlung

Vorteile von `.then`:

- Einfachere gleichzeitige Requests
- muss nicht in einer asynchronen Funktion beinhaltet sein

<!--
use case for await:

async function getFirstIncompleteTodo() {
  let i = 1;
  while (true) {
    const reply = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    const todoData = await reply.json();
    if (todoData.completed) {
      i++;
    } else {
      return todoData;
    }
  }
}
-->
