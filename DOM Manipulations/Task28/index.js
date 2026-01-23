// Write your code below 
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;

    localStorage.setItem("username", username)
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);

}
module.exports = handleFormSubmit;