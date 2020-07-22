<template>
  <li @click="$emit('toggle')">
    <span
      :class="{todoitem: true, completed: completed}"
    >{{completed ? "DONE: " : "TODO: "}}{{ title }}</span>
    <button @click.stop="$emit('delete')">X</button>
  </li>
</template>

<script>
export default {
  props: ["title", "completed"]
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>