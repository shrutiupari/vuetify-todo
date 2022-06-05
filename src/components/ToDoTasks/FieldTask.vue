<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-3"
    label="Regular"
    append-icon="mdi-plus"
    outlined
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        // {
        //   id: 1,
        //   title: "Notifications",
        //   done: false,
        // },
        // {
        //   id: 2,
        //   title: "Alarm",
        //   done: false,
        // },
        // {
        //   id: 3,
        //   title: "Study",
        //   done: false,
        // },
      ],
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style></style>
