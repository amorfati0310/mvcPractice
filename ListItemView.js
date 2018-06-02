// class ListItemView {
//   constructor(listItem){
//     // listItem template
//     this.listItem = listItem;
//     this.completedBtn = null;
//     this.deleteBtn = null;
//     this.todoText = null;
//   }
//   init(){
//     this.completedBtn = this.listItem.querySelector('.complete-btn')
//     this.deleteBtn = this.listItem.querySelector('.delete-btn')
//     this.todoText = this.listItem.querySelector('.todo-text')
//     this.completedBtn.addEventListnenr('click', e=>this.handleCompleteBtnClicked(e))
//     this.deleteBtn.addEventListnenr('click', e=>this.handleDelteBtnClicked(e))
//     this.todoText.addEventListnenr('dblclick', e=>this.handleTextDbClicked(e))
//   }
//   handleCompleteBtnClicked(e){
//    console.log(e.target)
//   }
//   handleDelteBtnClicked(e){
//     console.log(e.target)
//   }
//   handleTextDbClicked(e){
//     console.log(e.target)
//   }
//   updateText(text){
//     this.todoText.innerText = text;
//   }

// }