<template>
  <v-text-field
    v-model="newTaskTitle"
    class="pa-3"
    label="Add Tasks"
    outlined
    hide-details
    clearable
  >
    <template v-slot:append>
      <v-icon @keyup.enter="addTask" @click="addTask" color="primary" :disabled="taskTitleInvalid"> mdi-plus</v-icon>
    </template>
  </v-text-field>
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
  computed: {
    taskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if(!this.taskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
      }
      
    },
  },
};
</script>

<style></style>
