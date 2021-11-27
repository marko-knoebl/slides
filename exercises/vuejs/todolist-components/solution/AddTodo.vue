<template>
  <form @submit.prevent="onSubmit()">
    <input v-model="newTitle" />
    <button type="submit">add</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return { newTitle: "" };
  },
  methods: {
    onSubmit() {
      this.$emit("add", this.newTitle);
      this.newTitle = "";
    },
  },
};
</script>
