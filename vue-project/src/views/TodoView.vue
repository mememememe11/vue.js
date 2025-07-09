<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div class="header">
      <h2 style="margin: 5px">My To Do List</h2>
      <input
        type="text"
        v-model="newTodo"
        placeholder="Title..."
        @keyup.enter="addTodo"
      />
      <span class="addBtn" @click="addTodo">Add</span>
    </div>

    <ul id="myUL">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ checked: todo.checked }"
        @click="toggleTodo(index)"
      >
        {{ todo.text }}
        <span class="close" @click.stop="removeTodo(index)">×</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        { text: "Hit the gym", checked: false },
        { text: "Pay bills", checked: true },
        { text: "Meet George", checked: false },
        { text: "Buy eggs", checked: false },
        { text: "Read a book", checked: false },
        { text: "Organize office", checked: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") {
        alert("You must write something!");
        return;
      }
      this.todos.push({ text: this.newTodo.trim(), checked: false });
      this.newTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodo(index) {
      this.todos[index].checked = !this.todos[index].checked;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  min-width: 250px;
}
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  user-select: none;
}
ul li:nth-child(odd) {
  background: #f9f9f9;
}
ul li:hover {
  background: #ddd;
}
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}
.header:after {
  content: "";
  display: table;
  clear: both;
}
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}
.addBtn:hover {
  background-color: #bbb;
}
</style>
