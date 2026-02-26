
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    axios
        .post(
            "https://crudcrud.com/api/2305daf2dc1940b19f5cf62686420e09/appointmentData",
            userDetails
        )
        .then((response) => displayUserOnScreen(response.data))
        .catch((error) => console.log(error));

    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";


}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/2305daf2dc1940b19f5cf62686420e09/appointmentData")
        .then((res) => {
            //console.log(res)
            for (let i = 0; i < res.data.length; i++) {
                displayUserOnScreen(res.data[i]);
            }
        })
        .catch((err) => { console.log(err) })
})



function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);


    deleteBtn.addEventListener("click", () => {
        axios
            .delete(
                `https://crudcrud.com/api/2305daf2dc1940b19f5cf62686420e09/appointmentData/${userDetails._id}`
            )
            .then(() => {
                userList.removeChild(userItem); // remove from UI
            })
            .catch((err) => console.log(err));
    });

    editBtn.addEventListener("click", () => {
        axios
            .delete(
                `https://crudcrud.com/api/2305daf2dc1940b19f5cf62686420e09/appointmentData/${userDetails._id}`
            )
            .then(() => {
                userList.removeChild(userItem);

                document.getElementById("username").value = userDetails.username;
                document.getElementById("email").value = userDetails.email;
                document.getElementById("phone").value = userDetails.phone;
            })
            .catch((err) => console.log(err));
    });
}

// Do not touch code below
module.exports = handleFormSubmit;
