const todoList = [];

// addList();


// document.querySelector('.js-add').addEventListener('click', () => {
//   addListDate();
// });

function addTodo() {
  const nameInput = document.querySelector('.name-input');

  let name = nameInput.value;

  todoList.push(name);

  console.log(name);

  console.log(todoList);

  nameInput.value = '';

}

function addList() {
  const nameInput = document.querySelector('.name-input1');
  let name = nameInput.value;

  todoList.push(name);

  console.log(name);

  console.log(todoList);

  nameInput.value = '';

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    // const todo = todoList[i];
    const html = `<p>${todoList[i]}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.todo-list').innerHTML = todoListHTML;
  // const hienInput = document.querySelector('.hien-input');

  // let arr = hienInput.value;

  // console.log(arr);

  // const html = ;

  // document.querySelector('.p-hien').innerHTML = arr;
}
function addListDate() {
  const nameInput = document.querySelector('.name-input2');
  const dateInput = document.querySelector('.date');

  let name = nameInput.value;
  let dueDate = dateInput.value;

  todoList.push({name: name, dueDate: dueDate});

  console.log(todoList);

  nameInput.value = '';
  dateInput.value = '';

  render();
}


function render(){
  let todoListHTML = '';

todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html =
      `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          render();
        " class="delete-button js-delete"
        >Delete</button>
      `;
      todoListHTML += html;
});
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}