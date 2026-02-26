document.addEventListener("DOMContentLoaded", initialize);

// When the page loads, fetch expenses from localStorage and display them on the screen
function initialize() {
    // Get stored expenses or initialize empty array
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];

    // Display each expense
    for (let i = 0; i < expenseList.length; i++) {
        display(expenseList[i]);
    }
    // Clear any previous edit state
    sessionStorage.removeItem("editId");
}

// Handle form submission (Add / Update expense)
function handleFormSubmit(event) {
    // Prevent page refresh on form submit
    event.preventDefault();

    const expence = event.target.expense.value;
    const description = event.target.desc.value;
    const category = event.target.category.value;

    // Create expense object
    const expenseDetails = { expence, description, category };

    // Fetch existing expenses from localStorage
    let expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];

    // Check if we are editing an existing expense
    const editId = sessionStorage.getItem("editId");

    if (editId) {
        // Update existing expense
        for (let i = 0; i < expenseList.length; i++) {
            if (expenseList[i].id == editId) {
                expenseList[i].expence = expence;
                expenseList[i].description = description;
                expenseList[i].category = category;
            }
        }

        // Update the expense in the DOM
        const li = document.getElementById(editId);
        li.firstChild.textContent = expence + " " + description + " " + category;

        // Clear edit mode
        sessionStorage.removeItem("editId");

        // Reset button text
        const submitBtn = document.querySelector("button[type=submit]");
        submitBtn.textContent = "Submit";
    } else {
        // Add new expense
        addData(expenseList, expenseDetails);
    }

    // Reset form fields
    event.target.reset();

    // Save updated expense list to localStorage
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
}

// Add new expense
function addData(expenseList, expenseDetails) {
    // Generate unique ID using timestamp
    expenseDetails.id = Date.now();

    // Add expense to array
    expenseList.push(expenseDetails);

    // Display expense on UI
    display(expenseDetails);
}

function display(data) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    // Show expense details
    li.textContent = data.expence + " " + data.description + " " + data.category;

    // Assign unique ID to list item
    li.id = data.id;

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        deleteData(data.id, li);
    });

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        editData(data);
    });

    // Append buttons to list item
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // Append list item to unordered list
    ul.appendChild(li);
}

// Delete expense from localStorage and DOM
function deleteData(id, li) {
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];
    const updatedExpenseList = [];

    // Remove expense with matching ID
    for (let i = 0; i < expenseList.length; i++) {
        if (id !== expenseList[i].id) {
            updatedExpenseList.push(expenseList[i]);
        }
    }

    // Update localStorage
    localStorage.setItem("expenseList", JSON.stringify(updatedExpenseList));

    // Remove from UI
    li.remove();
}

// Load expense details into form for editing
function editData(data) {
    document.querySelector("#expense").value = data.expence;
    document.querySelector("#desc").value = data.description;
    document.querySelector("#category").value = data.category;

    // Store ID of expense being edited
    sessionStorage.setItem("editId", data.id);

    // Change button text to indicate update
    const submitBtn = document.querySelector("button[type=submit]");
    submitBtn.textContent = "Update";
}
