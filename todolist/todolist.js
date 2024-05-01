// let todoList = [
//   {item :'Buy milk', dueDate:'20/11/2020'},
//   {item: 'Go to College', dueDate: '20/12/2024'}
// ];
 
let todoList = JSON.parse(localStorage.getItem('todoList')) || []


displayItems();

function addTask(){
  let inputElement = document.querySelector("#todo-input");
  let dateElement  = document.querySelector("#todo-date");
  let todoTask = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoTask, dueDate: todoDate});
  inputElement.value = "";
  dateElement.value = "";

  localStorage.setItem('todoList' , JSON.stringify(todoList));
  displayItems();
}

function deleteTask(i){
  todoList.splice(i,1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for(let i = 0; i<todoList.length; i++){
    let {item, dueDate} = todoList[i]
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="but-del" onclick = "deleteTask(${i});">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
