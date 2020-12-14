import Todo from "./Todo";

type ApiTodo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async (): Promise<Array<Todo>> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const apiTodos: Array<ApiTodo> = await res.json();
  const todos = apiTodos.map((apiTodo) => ({
    id: apiTodo.id,
    title: apiTodo.title,
    completed: apiTodo.completed,
  }));
  return todos;
};

export { fetchTodos };
