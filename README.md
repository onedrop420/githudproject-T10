# githudproject-T10
# Project: To-Do List App
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>To-Do List App</h1>
    </header>
    <main>
        <section class="todo-list">
            <h2>My To-Do List</h2>
            <ul id="todo-list">
                <!-- To-do list items will be generated here -->
            </ul>
            <form id="add-todo-form">
                <input type="text" id="todo-input" placeholder="Add new to-do item">
                <button id="add-todo-btn">Add</button>
            </form>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>


styles.css

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.todo-list {
    background-color: #f7f7f7;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

#todo-list li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

#todo-list li:last-child {
    border-bottom: none;
}

#add-todo-form {
    margin-top: 20px;
}

#todo-input {
    width: 50%;
    height: 30px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
}

#add-todo-btn {
    width: 20%;
    height: 30px;
    padding: 10px;
    font-size: 16px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}


script.js

// Get the to-do list element
const todoList = document.getElementById('todo-list');

// Get the add to-do form element
const addTodoForm = document.getElementById('add-todo-form');

// Get the to-do input element
const todoInput = document.getElementById('todo-input');

// Get the add to-do button element
const addTodoBtn = document.getElementById('add-todo-btn');

// Initialize an empty to-do list array
let todoListArray = [];

// Function to add a new to-do item to the list
function addTodoItem(todoItem) {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Set the text content of the list item element
    listItem.textContent = todoItem;

    // Add the list item element to the to-do list
    todoList.appendChild(listItem);

    // Add the to-do item to the to-do list array
    todoListArray.push(todoItem);
}

// Function to handle the add to-do form submission
function handleAddTodoFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the to-do item text from the input field
    const todoItem = todoInput.value.trim();

    // Check if the to-do item text is not empty
    if (todoItem) {
        // Add the to-do item to the list
        addTodoItem(todoItem);

        // Clear the input field
        todoInput.value = '';
    }
}

// Add an event listener to the add to-do form
addTodoForm.addEventListener('submit', handleAddTodoFormSubmission);
