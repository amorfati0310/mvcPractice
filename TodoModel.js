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
    const todo = {text, completed: false, id: this.todoId}
    this.todos.set(this.todoId, todo);
    this.addCounter();
    this.notifyUpdate(this.todos)
  }
  getTodo(id) {
    return this.todos.get(id);
  }
  updateCompleted(id){
    const todo = this.todos.get(id)
    todo.completed = !todo.completed;
    this.updateTodo(todo)
  }
}