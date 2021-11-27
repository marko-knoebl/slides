<template>
  <ul>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :completed="todo.completed"
      @toggle="$emit('toggle', todo.id)"
      @delete="$emit('delete', todo.id)"
    />
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Todo } from "./types";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: { TodoItem },
  props: {
    todos: {
      type: [] as PropType<Array<Todo>>,
      required: true,
    },
  },
});
</script>
