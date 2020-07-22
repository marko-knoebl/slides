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

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  props: ["todos"]
};
</script>