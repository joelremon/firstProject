// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const userDetails = {
    username,
    email,
    phone
  };

  localStorage.setItem(userDetails.email,JSON.stringify(userDetails));
  addListItem(userDetails);
}

function addListItem(userDetails) {
  const ul = document.getElementById('listOfItems');
  const li = document.createElement('li');
  const liText = document.createTextNode(userDetails.username+' - '+userDetails.email+' - '+userDetails.phone);
  li.appendChild(liText);
  ul.appendChild(li);
}




  