const fruitsMod = document.querySelector('.fruits');
fruitsMod.style.backgroundColor = 'gray';
fruitsMod.style.padding = '30px';
fruitsMod.style.margin = '30px';
fruitsMod.style.width = '50%';
fruitsMod.style.borderRadius = '5px';
fruitsMod.style.listStyleType = 'none';

const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';

const basketHead = document.querySelector('h2');
basketHead.style.marginLeft = '30px';



 const fruitItems = document.querySelectorAll('.fruit');
 for(let i=0; i<fruitItems.length; i++) {
 fruitItems[i].style.backgroundColor = 'lightgray';
 fruitItems[i].style.padding = '10px';
 fruitItems[i].style.margin = '10px'; 
 fruitItems[i].style.borderRadius = '5px';
 fruitItems[i].style.listStyleType = 'none';
 }

 
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const fruit = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<fruit.length; i++) {
  fruit[i].style.backgroundColor = 'brown';
}

const oddTextColor = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<oddTextColor.length; i++) {
  oddTextColor[i].style.color = 'white';
}