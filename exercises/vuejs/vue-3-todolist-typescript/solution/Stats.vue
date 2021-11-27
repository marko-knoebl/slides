<template>
  <section>
    <h1>stats</h1>
    completed: {{ completed }}, incomplete: {{ incomplete }}
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "./types";

export default defineComponent({
  name: "Stats",
  props: {
    todos: {
      type: [] as PropType<Array<Todo>>,
      required: true,
    },
  },
  computed: {
    completed() {
      return this.todos.filter((t) => t.completed).length;
    },
    incomplete() {
      return this.todos.length - this.completed;
    },
  },
});
</script>
