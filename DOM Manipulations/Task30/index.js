document.addEventListener("DOMContentLoaded", initialize);

// When the page get load display all users
function initialize() {
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];
    for (let i = 0; i < expenseList.length; i++) {
        display(expenseList[i]);
    }
    sessionStorage.removeItem("editId");
}

// add new users in usersList array
function handleFormSubmit(event) {
    event.preventDefault();

    const expence = event.target.expense.value; // ✅ fixed
    const description = event.target.desc.value;
    const category = event.target.category.value;

    const expenseDetails = { expence, description, category };

    let expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];
    const editId = sessionStorage.getItem("editId");

    if (editId) {
        for (let i = 0; i < expenseList.length; i++) {
            if (expenseList[i].id == editId) {
                expenseList[i].expence = expence;
                expenseList[i].description = description;
                expenseList[i].category = category;
            }
        }

        const li = document.getElementById(editId);
        li.firstChild.textContent = expence + " " + description + " " + category;

        sessionStorage.removeItem("editId");

        const submitBtn = document.querySelector("button[type=submit]");
        submitBtn.textContent = "Submit";
    } else {
        addData(expenseList, expenseDetails);
    }

    event.target.reset(); // ✅ fixed
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
}

function addData(expenseList, expenseDetails) {
    expenseDetails.id = Date.now();
    expenseList.push(expenseDetails);
    display(expenseDetails);
}

// use this function to display user on screen
function display(data) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.textContent = data.expence + " " + data.description + " " + data.category;
    li.id = data.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        deleteData(data.id, li);
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        editData(data);
    });

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
}

// use this function to delete the user details from local store and DOM
function deleteData(id, li) {
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];
    const updatedExpenseList = [];

    for (let i = 0; i < expenseList.length; i++) {
        if (id !== expenseList[i].id) {
            updatedExpenseList.push(expenseList[i]);
        }
    }

    localStorage.setItem("expenseList", JSON.stringify(updatedExpenseList)); // ✅ fixed
    li.remove();
}

// use this function to update user details
function editData(data) {
    document.querySelector("#expense").value = data.expence;
    document.querySelector("#desc").value = data.description;
    document.querySelector("#category").value = data.category;

    sessionStorage.setItem("editId", data.id);

    const submitBtn = document.querySelector("button[type=submit]");
    submitBtn.textContent = "Update";
}
