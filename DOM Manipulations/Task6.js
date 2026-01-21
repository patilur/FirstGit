// Write answer to the questions asked below:
const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';
basketHeading.style.color = 'brown';

const fruitsItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitsItems.length; i++){
    fruitsItems[i].style.backgroundColor = 'brown';
    fruitsItems[i].style.color = 'white';
    fruitsItems[i].style.padding = '10px';
    fruitsItems[i].style.margin = '10px';
    fruitsItems[i].style.borderRadius = '5px';
}

const OddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < OddFruitItems.length; i++){
    OddFruitItems[i].style.backgroundColor = 'white';
    OddFruitItems[i].style.color = 'black';
}
