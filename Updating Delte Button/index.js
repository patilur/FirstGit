document.addEventListener("DOMContentLoaded", initialize);

// When the page get load display all users
function initialize() {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    for (let i = 0; i < usersList.length; i++) {
        display(usersList[i]);
    }

}

// add new users in usersList array
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username,
        email,
        phone
    };

    const userList = JSON.parse(localStorage.getItem("usersList")) || [];


    add(userList, userDetails);


    event.target.reset();

    localStorage.setItem("usersList", JSON.stringify(userList));
}

function add() {
    userDetails.id = Date.now();
    userList.push(userDetails);
    display(userDetails);
}


// use this function to display user on screen
function display(data) {

    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.textContent = data.username + " " + data.email + " " + data.phone;

    ul.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        deleteData(data.id, li);
    })

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        editData(data);
    })

    li.appendChild(editButton);
    li.appendChild(deleteButton);
}

//
function editData(data) {
    const usernameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");

    usernameInput.value = data.username;
    emailInput.value = data.email;
    phoneInput.value = data.phone;

    sessionStorage.setItem("editId", data.id);
    const submitBtn = document.querySelector("button[type=submit]");
    submitBtn.textContent = "Update"

}
// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    const updatedUSerList = [];

    for (let i = 0; i < usersList.length; i++) {
        if (id !== usersList[i].id) {
            updatedUSerList.push(usersList[i]);
        }
    }
    localStorage.setItem("usersList", JSON.stringify(updatedUSerList));

    li.remove();
}




module.exports = handleFormSubmit
