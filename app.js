// 'use strict';

/**
- 할일을 입력하면 '해야할일들'에 노출된다.
- event delegation 을 사용한다. (document 에만 event를 등록한다)
- Template literal 을 활용한 view용 html 데이터 생성.

================================================
1. Model
데이터를 갱신한다(추가,변경,제거,획득)
데이터를 획득하는 로직(Ajax나 localstorage등)을 model에 넣을 수도 있으나, controller에서 만들어서 줄 수도 있음.

2. Controller
전체적으로는 Model과 View간의 변경사항을 연결 지어주기.
event hander(listener) 구현체 만들기.
view 가 렌더링을 잘 할 수 있도록 데이터 가공(viewModel 만들기)
데이터 변경이 필요한 경우는 model에 전달.

3. View
DOM조작(view변경)에만 집중.
데이터를 받아서 별다른 가공없이 DOM에 추가.
Event listener 등록.
*/

//Controller, View의 존재를 전혀 모르게 구현.

const todoModel = new TodoModel();

const formView = new FormView('.todo-app .user-form');
const listView = new ListView('.todo-app .todo-list');
const folidingView = new FolidingView('.folding');

const todoView = {
  formView,
  listView,
  folidingView
}

const todoController = new TodoController({
  model: todoModel, 
  view: todoView
})

todoController.init();



