function formSubmitEvent(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.useremail.value;
    const phNo = event.target.phoneno.value
    localStorage.setItem('username',name);
    localStorage.setItem('useremail',email);
    localStorage.setItem('phonenumber',phNo);
  }
  