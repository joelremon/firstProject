function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userDetails = {
        name,
        phone,
        email
    };
    localStorage.setItem(userDetails.name,JSON.stringify(userDetails));  
    addListItem(userDetails);   
}

function addListItem(userDetails) {
    const ul = document.querySelector('ul');
    //Create new list item
    const li = document.createElement('li');
    li.textContent = userDetails.name+' - '+userDetails.email+' - '+userDetails.phone;
    //Create delete button
    const btn = document.createElement('button');
    btn.textContent = "Delete";
    btn.addEventListener('click',function() {
        ul.removeChild(li);
        localStorage.removeItem(userDetails.name);
    });
    li.appendChild(btn);
    ul.appendChild(li);
}