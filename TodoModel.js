class TodoModel {
  constructor() {
    this.todoId = 1;
    this.todos = new Map();
    this.notifyUpdate = null;
  }
  addCounter() {
    this.todoId++;
  }
  addTodo(text) {
    this.todos.set(this.todoId, { text });
    this.addCounter();
    this.notifyUpdate(this.todos)
  }
  getTodo(id) {
    return this.todos.get(id);
  }
}