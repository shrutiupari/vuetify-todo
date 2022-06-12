<template>
  <!-- v-if="$store.state.tasks.length" -->
  <v-list class="pt-0" flat>
    <draggable v-model="tasks" handle=".handle">
      <tasks-list
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </draggable>
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
import draggable from "vuedraggable";
export default {
  computed: {
    tasks: {
      get() {
        return this.$store.getters.taskFiltered
      },
      set(value) {
        this.$store.dispatch('updateList', value);
      }
    }
  },
  components: {
    draggable,
    "tasks-list": require("@/components/ToDoTasks/TasksItem.vue").default,
  },
};
</script>

<style></style>
