// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    console.log(form.name.value);
    console.log(form.email.value);
    console.log(form.phno.value);
    console.log(form.date.value);
    console.log(form.time.value)
}

module.export = handleFormSubmit;
