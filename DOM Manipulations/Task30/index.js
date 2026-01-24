// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = { username, email, phone }

    const stringObj = JSON.stringify(obj)
    localStorage.setItem(email, stringObj);

    getUserFromLocalStorage();

   

}
function getUserFromLocalStorage() {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        const userObj = JSON.parse(localStorage.getItem(key));

        const li = document.createElement("li");

        li.textContent = "Username:" + userObj.username + ", Email:" + userObj.email + ", Phone:" + userObj.phone;

        ul.appendChild(li);
    }
}

module.exports=handleFormSubmit