<template>
  <li @click="$emit('toggle')">
    <span :class="{ todoitem: true, completed: completed }">
      {{ completed ? "DONE: " : "TODO: " }}{{ title }}
    </span>
    <button @click.stop="$emit('delete')">delete</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
