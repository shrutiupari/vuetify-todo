<template>
  <!-- v-if="$store.state.tasks.length" -->
  <v-list class="pt-0" flat>
    <tasks-list v-for="task in $store.state.tasks" :key="task.id" :task="task" />
    <!-- <v-list-item
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
    </v-list-item> -->
    <v-divider />
  </v-list>
</template>

<script>
export default {
  components: {
   "tasks-list": require('@/components/ToDoTasks/TasksItem.vue').default
  },
};
</script>

<style></style>
