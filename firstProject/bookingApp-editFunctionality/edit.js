function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const user = {
        username,
        email,
        phone
    };
    localStorage.setItem(user.username,JSON.stringify(user));
    addNewUser(user);
}

function addNewUser(user) {
    const ul = document.querySelector('ul');
    const name = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    //Create list item
    const li = document.createElement('li');
    li.textContent = user.username+'-'+user.email+'-'+ user.phone;

    //To create delete button for list item
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    deleteBtn.onclick = () => {
        localStorage.removeItem(user.username);
        ul.removeChild(li);
    } 
    
    //To create edit button for list item
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        localStorage.removeItem(user.username);
        //To add the values back to the input fields to edit
        name.value = user.username;
        email.value = user.email;
        phone.value = user.phone;
        ul.removeChild(li);     
    }

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
    // To clear the input fields after form submission
    name.value = '';
    email.value = '';     
    phone.value = '';
}
