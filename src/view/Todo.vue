<template>
  <div class="home">
    <h1>Todo Page</h1>
    <!-- <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      label="Regular"
      append-icon="mdi-plus"
      outlined
      hide-details
      clearable
    ></v-text-field> -->
    <field-add-tasks></field-add-tasks>
    <!-- <v-list v-if="$store.state.tasks.length" class="pt-0" flat>
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="$store.commit('doneTasks', task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="$store.commit('deleteTask', task.id)" icon>
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider />
      </div>
    </v-list> -->
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else>
      <!-- <v-icon size="100px" color="primary"> mdi-check </v-icon>
      <div class="text-h5 primary--text">No Tasks</div> -->
    </no-tasks>
  </div>
</template>

<script>
export default {
  name: "TodoPage",
  // data() {
  //   return {
  //     newTaskTitle: "",
  //     tasks: [
  //       // {
  //       //   id: 1,
  //       //   title: "Notifications",
  //       //   done: false,
  //       // },
  //       // {
  //       //   id: 2,
  //       //   title: "Alarm",
  //       //   done: false,
  //       // },
  //       // {
  //       //   id: 3,
  //       //   title: "Study",
  //       //   done: false,
  //       // },
  //     ],
  //   };
  // },
  // methods: {
  //   addTask() {
  //     // console.log("add task");
  //     // let newTask = {
  //     //   id: Date.now(),
  //     //   title: this.newTaskTitle,
  //     //   done: false
  //     // }

  //     // this.tasks.push(newTask)
  //     // this.newTaskTitle = '';
  //     this.$store.commit("addTask", this.newTaskTitle);
  //     this.newTaskTitle = "";
  //   },
  //   // doneTasks(taskId) {
  //   //   // console.log(taskId);
  //   //   let task = this.tasks.filter((task) => task.id == taskId)[0];
  //   //   task.done = !task.done;
  //   // },
  //   // deleteTask(taskId) {
  //   //   this.tasks = this.tasks.filter((task) => task.id != taskId);
  //   // },
  // },
  components: {
    "field-add-tasks": require("@/components/ToDoTasks/FieldTask.vue").default,
    "list-tasks": require("@/components/ToDoTasks/ListTasks.vue").default,
    "no-tasks": require("@/components/ToDoTasks/NoTasks.vue").default,


  },
};
</script>

<style scoped>

</style>
