class ListView {
  constructor(selector){
    this.el = null;
    this.list = null;
    this.init(selector);
  }
  init(selector){
    this.el = document.querySelector(selector)
  }
  getList(todos){
    this.list = todos;
    this.updateListView(this.list);
  }
  updateListView(list){
    this.el.innerHTML = this.makeTemplate(list)
  }
  makeTemplate(list){
    let template = ``;
    list.forEach(todo=> {
      template+=`<li>${todo.text}</li>`
    });
    return template;
  }
}