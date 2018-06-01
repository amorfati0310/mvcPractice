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
  }
  sendTodoText(todoText){
   this.model.addTodo(todoText);
  }
  notifyUpdate(todos){
    this.listView.getList(todos)
  }

}