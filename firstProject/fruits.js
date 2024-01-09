const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';
const headingEdit = document.getElementById('header');
headingEdit.style.backgroundColor = 'green';
headingEdit.style.borderBottom = '5px solid orange';
const secondHeading = document.getElementById('basket-heading');
secondHeading.style.color = 'green';
const exit = document.getElementById('thanks');
exit.innerHTML = '<p>Please visit us again</p>';

const fruits = document.getElementsByClassName('fruit');
fruits[2].style.backgroundColor = "yellow";
for(let i=0; i<fruits.length; i++) {
  fruits[i].style.fontWeight = 'bold';
}

const listItems = document.getElementsByTagName('li');
listItems[4].style.color = "blue";
for(let i=0; i<listItems.length; i++) {
  listItems[i].style.fontStyle = 'italic';
}