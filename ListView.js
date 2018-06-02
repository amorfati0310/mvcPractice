class ListView {
  constructor(selector){
    this.el = null;
    this.list = null;
    this.init(selector);
  } 
  init(selector){
    this.el = document.querySelector(selector)
    this.bindEvents()
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
    list.forEach((todo,i)=> {
      template+= `<li><button class="complete-btn"></button><p class="todo-text">${todo.text}</p><button class="delete-btn">X</button></li>`
    });
    return template;
  }
  bindEvents(){
    this.el.addEventListener('click', e=>this.handleClicked(e))
    this.el.addEventListener('dbclick',e=>this.handleDbClick(e))
  }
  handleClicked(e){
      if(e.target.className=="complete-btn") return this.handleCompleteBtnClicked(e)
      if(e.target.className=="delete-btn") return this.handleDeleteBtnClicked(e)
  }
  handleCompleteBtnClicked(e){
    const completeBtn= e.target
    completeBtn.innerText = "V"
    completeBtn.nextElementSibling.classList.add('completed')
  }
  handleDeleteBtnClicked(e){
    console.dir(e.target)
  }
}