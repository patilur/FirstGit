// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = { username, email, phone }

    const stringObj = JSON.stringify(obj);
    localStorage.setItem(email, stringObj);

    displayUser(obj);
    
}

function displayUser(obj) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li")

    li.textContent = obj.username + " - " + obj.email + " - " + obj.phone;

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";

    delbtn.addEventListener("click", () => {
        li.remove();
        localStorage.removeItem(obj.email);
    })

    li.appendChild(delbtn);
    ul.appendChild(li);
}

module.exports = handleFormSubmit;