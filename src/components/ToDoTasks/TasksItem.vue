<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTasks', task.id)"
      class="white"
      :class="{ 'blue lighten-5': task.done }"
      :ripple="false"
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
          <v-list-item-action-text v-if="task.dueDate">
            <v-icon small color="grey lighten-1"> mdi-calendar </v-icon>
            {{ task.dueDate | newDueDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <!-- <v-btn @click.stop="dialogs.delete = true" icon>
            <v-icon color="primary">mdi-delete</v-icon>
          </v-btn> -->
          <task-menu :task="task"></task-menu>
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sortTasks">
          <v-btn color="primary" class="handle" icon>
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  props: ["task"],
  filters: {
    newDueDate(value) {
      return format(new Date(value), "MMM d");
    },
  },
  components: {
    "task-menu": require("@/components/ToDoTasks/TasksMenu.vue").default,
  },
};
</script>

<style lang="sass" scoped>
  .sortable-ghost
    opacity: 0
  .sortable-drag
    box-shadow: 0 0 10px rgba(0,0,0,0.3)

</style>
