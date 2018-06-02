class TodoController {
  constructor({model, view}){
    this.model = model
    const { formView, listView, folidingView} = view;
    this.formView = formView;
    this.listView = listView;
    this.foldingView = folidingView;
  }
  init(){
   this.formView.sendTodoText = this.sendTodoText.bind(this)
   this.model.notifyUpdate = this.notifyUpdate.bind(this)
   this.listView.updateCompleteState = this.updateCompleteState.bind(this);
   this.model.updateTodo = this.sendUpdateTodo.bind(this)
   this.model.deleteEl =  this.deleteEl.bind(this)
  }
  sendTodoText(todoText){
   this.model.addTodo(todoText);
  }
  notifyUpdate(todos){
    this.listView.getList(todos)
  }
  updateCompleteState(todoId){
    this.model.updateCompleted(todoId)
  }
  sendUpdateTodo(todo){
    this.listView.getUpdatedTodo(todo)
  }
  deleteTodo(todoId){
    this.model.deleteTodo(todoId)
  } 
  deleteEl(todoId){
    this.listView.deleteTodo(todoId)
  }
}