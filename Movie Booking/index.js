let totalBookingCount = 0;
let allBookings = [];



window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/aabe1744c2914e919ed9dbe28599a6d2/movieTicketBooking")
        .then((res) => {
            //console.log(res)
            allBookings = res.data;
            totalBookingCount = res.data.length;
            updateTotalBooking();
            for (let i = 0; i < res.data.length; i++) {
                displayUserOnScreen(res.data[i]);
            }
        })
        .catch((err) => { console.log(err) })
})
function updateTotalBooking() {
    document.getElementById("totalBooking").textContent = totalBookingCount;
}
function handleFormSubmit(event) {
    event.preventDefault();
    const seatNo = event.target.seat.value;

    //CHECK if seat already booked
    let seatAlreadyBooked = false;

    for (let i = 0; i < allBookings.length; i++) {
        if (allBookings[i].seatno == seatNo) {
            seatAlreadyBooked = true;
            break;
        }
    }

    if (seatAlreadyBooked) {
        alert("Seat is already booked");
        return;
    }
    const userDetails = {
        username: event.target.username.value,
        seatno: event.target.seat.value,
    };
    axios
        .post(
            "https://crudcrud.com/api/aabe1744c2914e919ed9dbe28599a6d2/movieTicketBooking",
            userDetails
        )
        .then((response) => {
            allBookings.push(response.data);
            displayUserOnScreen(response.data);
            totalBookingCount++;
            updateTotalBooking();
        })

        .catch((error) => console.log(error));

    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("seat").value = "";

}

function displayUserOnScreen(userDetails) {
    const tableBody = document.getElementById("bookingTableBody");

    const tr = document.createElement("tr");

    const tdUsername = document.createElement("td");
    tdUsername.textContent = userDetails.username;

    const tdSeat = document.createElement("td");
    tdSeat.textContent = userDetails.seatno;

    const tdActions = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm me-2";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning btn-sm";

    tdActions.appendChild(deleteBtn);
    tdActions.appendChild(editBtn);

    tr.appendChild(tdUsername);
    tr.appendChild(tdSeat);
    tr.appendChild(tdActions);

    tableBody.appendChild(tr);
    // DELETE
    deleteBtn.addEventListener("click", function () {
        axios
            .delete(
                `https://crudcrud.com/api/aabe1744c2914e919ed9dbe28599a6d2/movieTicketBooking/${userDetails._id}`
            )
            .then(() => {
                for (let i = 0; i < allBookings.length; i++) {
                    if (allBookings[i]._id === userDetails._id) {
                        allBookings.splice(i, 1);
                        break;
                    }
                }
                tableBody.removeChild(tr);
                totalBookingCount--;
                updateTotalBooking();

            })
            .catch((error) => console.log(error));
    });



    // EDIT (delete old data and refill form)
    editBtn.addEventListener("click", function () {
        axios
            .delete(
                `https://crudcrud.com/api/aabe1744c2914e919ed9dbe28599a6d2/movieTicketBooking/${userDetails._id}`
            )
            .then(() => {
                for (let i = 0; i < allBookings.length; i++) {
                    if (allBookings[i]._id === userDetails._id) {
                        allBookings.splice(i, 1);
                        break;
                    }
                }
                tableBody.removeChild(tr);
                totalBookingCount--;
                updateTotalBooking();
                document.getElementById("username").value = userDetails.username;
                document.getElementById("seat").value = userDetails.seatno;

            })
            .catch((error) => console.log(error));
    });
}

document.getElementById("search").addEventListener("change", searchBySeat);

function searchBySeat() {
    const searchValue = document.getElementById("search").value.trim();
    const tableBody = document.getElementById("bookingTableBody");

    // clear table
    tableBody.innerHTML = "";

    // if search box is empty → show all bookings
    if (searchValue === "") {
        for (let i = 0; i < allBookings.length; i++) {
            displayUserOnScreen(allBookings[i]);
        }
        return;
    }

    let found = false;

    // search booking
    for (let i = 0; i < allBookings.length; i++) {
        if (allBookings[i].seatno == searchValue) {
            displayUserOnScreen(allBookings[i]);
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Seat not booked");
    }
}

