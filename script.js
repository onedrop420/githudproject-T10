
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
