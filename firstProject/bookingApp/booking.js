// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();
  const userName = event.target.username.value;
  const userEmail = event.target.email.value;
  const userNo = event.target.phone.value;

  const userDetails = {
    Name : userName,
    Email : userEmail,
    PhoneNo : userNo
  };

  localStorage.setItem("User Details",JSON.stringify(userDetails));
}

  