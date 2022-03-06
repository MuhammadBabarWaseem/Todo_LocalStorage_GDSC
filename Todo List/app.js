var list = [];
window.onload = function () {
  if (JSON.parse(localStorage.getItem('todo-element')) != null) {
    list = JSON.parse(localStorage.getItem('todo-element'));
    console.log('list' + list)
    showList();
  }
}
var my = document.getElementById('my')
var addBtn = document.getElementById('addBtn')
var todoList = document.getElementById('todoList')
addBtn.addEventListener('click', function () {
  addTodo()
})

function addTodo() {
  var userInput = document.getElementById('userInput').value
  if (userInput == '') {
    alert('Please Enter The Data.')
  }
  else {
    var date = new Date();
    var dte = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var total = dte + ' / ' + month + ' / ' + year
    var status = false;
    var obj1 = {
      title: userInput,
      status1: status,
      createdAt: total,
    };
    list.push(obj1)
    if (localStorage.getItem('todo-element') == null) {
      localStorage.setItem('todo-element', JSON.stringify(list));
    } 
    else {
      localStorage.setItem('todo-element', JSON.stringify(list))
    }
    var userInput = document.getElementById('userInput').value = ''
    console.log(list)
    showList()
  }
}

function showList() {
  todoList.innerHTML = '';
  list.forEach(function (n, index) {
    todoList.innerHTML += '<li id=lineThrough' + index + '>' + '' + n.title +
      '<p>' + n.createdAt + '</p>' +
      '<a onclick=editItem(' + index + ')><i class="fa-solid fa-pen-to-square"></i></a><a onclick=deleteItem(' + index + ')><i class="fa-solid fa-trash"></i></a><a onclick=editMark(' + index + ')><i class="fa-solid fa-circle-check"></i></a></li>';
  });
}

function deleteItem(index) {
  list.splice(index, 1)
  if (localStorage.getItem('todo-element') == null) {
    localStorage.setItem('todo-element', JSON.stringify(list));
  } else {
    localStorage.setItem('todo-element', JSON.stringify(list))
  }
  showList()
}
function editItem(index) {
  var newValue = prompt('Enter your Edit value .');
  var todo = list[index]
  todo.title = newValue
  list.splice(index, 1, todo)
  if (localStorage.getItem('todo-element') == null) {
    localStorage.setItem('todo-element', JSON.stringify(list));
  } else {
    localStorage.setItem('todo-element', JSON.stringify(list))
  }
  showList()
}
function editMark(index) {
  var element = document.getElementById('lineThrough' + index)
  element.style.textDecoration = 'line-through';
  if (localStorage.getItem('todo-element') == null) {
    localStorage.setItem('todo-element', JSON.stringify(list));
  } else {
    localStorage.setItem('todo-element', JSON.stringify(list))
  }
}