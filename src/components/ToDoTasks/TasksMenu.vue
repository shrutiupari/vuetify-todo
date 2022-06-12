<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(i)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
    <dialog-due-date
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    ></dialog-due-date>
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      dialogs: {
        edit: false,
        delete: false,
        dueDate: false
      },
      items: [
        {
          title: "Edit Task",
          icon: "mdi-pencil",
          click() {
            this.dialogs.edit = true;
          },
        },
        {
          title: "Due Date",
          icon: "mdi-calendar",
          click() {
            this.dialogs.dueDate = true;
          },
        },
        {
          title: "Delete Task",
          icon: "mdi-delete",
          click() {
            this.dialogs.delete = true;
          },
        },
        {
          title: "Sort Task",
          icon: "mdi-drag-horizontal-variant",
          click() {
            this.$store.commit('toggleSortTasks');
          },
        },
      ],
    };
  },
  components: {
    "dialog-edit": require("@/components/ToDoTasks/Dialogs/DialogEditTask.vue")
      .default,
    "dialog-delete":
      require("@/components/ToDoTasks/Dialogs/DialogDeleteTask.vue").default,
    "dialog-due-date":
      require("@/components/ToDoTasks/Dialogs/DialogDueDate.vue").default,
  },
  methods: {
    handleClick(value) {
      this.items[value].click.call(this);
    },
  },
};
</script>

<style></style>
