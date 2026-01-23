// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits')

fruits.querySelectorAll('li').forEach(li => {
    if (!li.querySelector('.edit.btn')) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        li.appendChild(editBtn);
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    //selected the input element
    const fruitToAdd = document.getElementById('fruit-to-add');
    

    //create li
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button >'+'<button class="edit-btn">Edit</button>'

    // const newLiText = document.createTextNode(fruitToAdd.value);
    // newLi.appendChild(newLiText);
    // newLi.className = 'fruit';
    // //create a delete button to be added inside li
    // const deleteBtn = document.createElement('button');
    // const deleteBtnText = document.createTextNode('x');
    // deleteBtn.appendChild(deleteBtnText);
    // deleteBtn.className = 'delete-btn';
    // const editBtn = document.createElement('button');
    // const editbtnText = document.createTextNode('Edit');
    // editBtn.appendChild(editbtnText);
    // editBtn.className = 'edit-btn';

    // newLi.appendChild(deleteBtn);
    // newLi.appendChild(editBtn);

    //adding li as the last element of unordered list
    fruits.appendChild(newLi);

})

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});