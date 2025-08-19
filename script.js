let todoList = [];

const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoListElement = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todo = {
            text: todoText,
            completed: false
        };
        todoList.push(todo);
        renderTodoList();
        todoInput.value = '';
    }
}

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoListElement.appendChild(todoItem);
    });
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}
