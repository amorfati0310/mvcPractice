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
    const todo = {text, completed: 'false'}
    this.todos.set(this.todoId, todo);
    this.addCounter();
    this.notifyUpdate(this.todos)
  }
  getTodo(id) {
    return this.todos.get(id);
  }
}