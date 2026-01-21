// Write your code below:
//create element
const headingh3 = document.createElement('h3');
const para = document.createElement('p');
//create textnode
const text = document.createTextNode('Buy high quality organic fruit online');
const paraText = document.createTextNode('Total fruits: 4');

//appendchild
headingh3.appendChild(text);
para.appendChild(paraText);

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(headingh3);
headingh3.style.fontStyle = 'italic'

const thirdDiv = divs[1];
const fruits = document.querySelector('.fruits');
thirdDiv.insertBefore(para, fruits);

para.id = 'fruits-total';