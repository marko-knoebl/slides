<template>
  <section>
    <h1>stats</h1>
    completed: {{completed}}, incomplete: {{incomplete}}
  </section>
</template>

<script>
export default {
  props: ["todos"],
  computed: {
    completed() {
      return this.todos.filter(t => t.completed).length;
    },
    incomplete() {
      return this.todos.length - this.completed;
    }
  }
};
</script>
