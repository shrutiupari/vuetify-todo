import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");

db.config.debug = false

Vue.use(Vuex);

export default new Vuex.Store({
  // State is where all the data is stored
  // Mutations are methods that change the state by trigerring or committing (CRUD). Can't use synchronous code
  // Actions are methods which cannot change the state and do change the state we need to commit mutations which further changes the state. API call to be done in actions
  // getter allow to access data

  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    sortTasks: false,
    tasks: [
      // {
      //   id: 1,
      //   title: "Notifications",
      //   done: false,
      //   dueDate: "2022-06-11",
      // },
      // {
      //   id: 2,
      //   title: "Alarm",
      //   done: false,
      //   dueDate: "2022-06-11",
      // },
      // {
      //   id: 3,
      //   title: "Study",
      //   done: false,
      //   dueDate: null,
      // },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  getters: {
    taskFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title
          .toLocaleLowerCase()
          .includes(state.search.toLocaleLowerCase())
      );
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    doneTasks(state, taskId) {
      // console.log(taskId);
      let task = state.tasks.filter((task) => task.id == taskId)[0];
      task.done = !task.done;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id != taskId);
    },
    updateTask(state, payload) {
      let task = state.tasks.filter((task) => task.id == payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id == payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    updateList(state, payload) {
      state.tasks = payload;
    },
    showSnackBar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackBar(state) {
      state.snackbar.show = false;
    },
    toggleSortTasks(state) {
      state.sortTasks = !state.sortTasks;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          commit("addTask", newTask);
          commit("showSnackBar", "Task Added");
        });
    },
    doneTasks({ state, commit }, taskId) {
      let task = state.tasks.filter((task) => task.id == taskId)[0];
      db.collection("tasks")
        .doc({ id: taskId })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("doneTasks", taskId);
        });
    },
    deleteTask({ commit }, taskId) {
      db.collection("tasks")
        .doc({ id: taskId })
        .delete()
        .then(() => {
          commit("deleteTask", taskId);
          commit("showSnackBar", "Task Deleted");
        });
    },
    updateTask({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          commit("updateTask", payload);
          commit("showSnackBar", "Task Edited");
        });
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("updateTaskDueDate", payload);
          commit("showSnackBar", "Task Due Date Updated");
        });
    },
    updateList({ commit }, tasks) {
      db.collection("tasks").set(tasks);
      commit("updateList", tasks);
    },
    getTasks({ commit }) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          commit("updateList", tasks);
        });
    },
  },
  modules: {},
});
