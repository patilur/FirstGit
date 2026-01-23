let form = document.getElementsByTagName('form')[0];

// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.
let button = document.querySelector('button');

//create description input
let descInput = document.createElement('input');
descInput.type = 'text';
descInput.id = 'description';
descInput.placeholder = 'Enter fruit description';

form.insertBefore(descInput, button)

/////////////////////////////////

// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitName = document.getElementById('fruit-to-add').value;
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }

    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.
    const newLi = document.createElement('li');
    newLi.className = 'fruit';

    newLi.innerHTML = fruitName;

    const descPara = document.createElement('p');
    descPara.textContent = fruitDescription;
    descPara.style.fontStyle = 'italic';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';

    newLi.appendChild(descPara);
    newLi.appendChild(deleteBtn);
    fruititems.appendChild(newLi);

    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});


// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.

const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName("fruit");
    
    for (let i = 0; i < fruitItems.length; i++){
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();

        const descElement = fruitItems[i].querySelector('p');
        const fruitDesc = descElement ? descElement.textContent.toLowerCase() : "";
        if (currentFruitText.includes(textEntered)|| fruitDesc.includes(textEntered)) {
            fruitItems[i].style.display = "flex";
        } else {
            fruitItems[i].style.display = "none";
        }
    }
})


