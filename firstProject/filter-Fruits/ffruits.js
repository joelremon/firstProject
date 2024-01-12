// Add input element inside form, before button, to take fruit description

const newInput = document.createElement("input");
newInput.type = "text";
newInput.placeholder = "description of fruit";
newInput.id = "description";
const btn = document.querySelector("button");
const form = document.querySelector("form");
form.insertBefore(newInput, btn);

// Show the fruit description in italics on the next line

const fruits = document.querySelector(".fruits");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.querySelector("#fruit-to-add");
  const descriptionToAdd = document.getElementById("description");
  // Create the li
  const newLi = document.createElement("li");
  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = "fruit";
  // create para to add description
  const para = document.createElement("p");
  const paraText = document.createTextNode(descriptionToAdd.value);
  para.appendChild(paraText);
  para.style.fontStyle = "italic";
  newLi.appendChild(para);
  // create x button
  const btn = document.createElement("button");
  const btnText = document.createTextNode("x");
  btn.appendChild(btnText);
  btn.className = "delete-btn";
  newLi.appendChild(btn);

  fruits.appendChild(newLi);
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruit = document.getElementsByClassName("fruit");
  for (let i = 0; i < fruit.length; i++) {
    const currentFruitText = fruit[i].firstChild.textContent.toLowerCase();
    const descriptionText =
      fruit[i].firstElementChild.textContent.toLowerCase();
    if (
      currentFruitText.indexOf(textEntered) === -1 &&
      descriptionText.indexOf(textEntered) === -1
    ) {
      fruit[i].style.display = "none";
    } else {
      fruit[i].style.display = "flex";
    }
  }
});
