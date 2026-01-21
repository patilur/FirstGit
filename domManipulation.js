// Write your code below:

const header = document.getElementById('header')
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange'

const main_heading = document.getElementById('main-heading');
main_heading.textContent = 'Fruit World';
main_heading.style.color = 'orange';

const baskethead = document.getElementById('basket-heading');
baskethead.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</>';


//HTML code
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body style="margin: 0">
//     <div id="header" style="padding: 1rem 0; background-color: lightblue">
//       <h1 id="main-heading" style="margin: 0">Fruit Shop</h1>
//     </div>
//     <div>
//       <h2 id="basket-heading">Fruits In Basket</h2>
//       <ul class="fruits">
//         <li class="fruit">Banana</li>
//         <li class="fruit">Apple</li>
//         <li class="fruit">Orange</li>
//         <li class="fruit">Kiwi</li>
//       </ul>
//     </div>
//     <div id="thanks"></div>
//   </body>
//   <script src="index.js"></script>
// </html>
