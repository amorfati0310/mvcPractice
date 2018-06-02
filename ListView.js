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
    this.bindEvents()
  }
  makeTemplate(list){
    let template = ``;
    list.forEach((todo,i)=> {
      template+= `<li><button class="complete-btn">${i}</button><p class="todo-text">${todo.text}</p><button class="delete-btn">X</button></li>`
    });
    return template;
  }
  bindEvents(){
    this.el.addEventListener('click', e=>this.handleClicked(e))
    this.el.addEventListener('dbclick',e=>this.handleDbClick(e))
  }
  handleClicked(e){
    debugger;
      if(e.target.className=="complete-btn") return this.handleCompleteBtnClicked(e)
      if(e.target.className=="delete-btn") return this.handleDeleteBtnClicked(e)
  }
  handleCompleteBtnClicked(e){
    console.dir(e.target)
    console.dir(e.target.innerText)
  }
  handleDeleteBtnClicked(e){
    console.dir(e.target)
  }
}