// src/ store // index.js

import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, name: "Vue 공부하기", chk: false },
      { id: 2, name: "TV 시청'", chk: false },
      { id: 3, name: "저녁운동", chk: false },
    ],
    title: "Hello, world",
  },
  getters: {
    titling(state) {
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
});
