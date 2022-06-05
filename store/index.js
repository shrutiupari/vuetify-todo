import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // State is where all the data is stored
  // Mutations are methods that change the state by trigerring or committing (CRUD). Can't use synchronous code
  // Actions are methods which cannot change the state and do change the state we need to commit mutations which further changes the state. API call to be done in actions
  // getter allow to access data

  state: {
    tasks: [
      {
        id: 1,
        title: "Notifications",
        done: false,
      },
      {
        id: 2,
        title: "Alarm",
        done: false,
      },
      {
        id: 3,
        title: "Study",
        done: false,
      },
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      // console.log("add task");
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };

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
    showSnackBar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout= 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackBar(state) {
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackBar", "Task Added");
    },
    deleteTask({ commit }, taskId) {
      commit("deleteTask", taskId);
      commit("showSnackBar", "Task Deleted");
    },
  },
  modules: {},
});
