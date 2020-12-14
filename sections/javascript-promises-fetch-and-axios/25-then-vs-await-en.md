# Then vs. await

## Then vs. await

advantages of `await`:

- code resembles "synchronous" code
- error handling is more straightforward

advantages of `.then`:

- simpler parallel requests
- does not have to be inside an async function

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
