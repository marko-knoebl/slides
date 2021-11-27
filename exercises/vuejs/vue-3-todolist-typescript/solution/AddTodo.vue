<template>
  <form @submit.prevent="onSubmit()">
    <input v-model="newTitle" />
    <button type="submit">add</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type State = {
  newTitle: string;
};

export default defineComponent({
  name: "AddTodo",
  data(): State {
    return { newTitle: "" };
  },
  methods: {
    onSubmit(): void {
      this.$emit("add", this.newTitle);
      this.newTitle = "";
    },
  },
});
</script>
