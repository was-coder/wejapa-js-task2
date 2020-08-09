const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    getValues();
});

function getValues() {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    if(fullnameValue === "") {
        setError(fullname, "Name cannot be blank");
    }
    else if(!nameCheck(fullnameValue)) {
        setError(fullname, "Name should be Alphabet and contain FirstName and LastName")
    }
    else {
        setSuccess(fullname, "Accepted Input");
    }

    if(emailValue === "") {
        setError(email, "Email cannot be blank");
    }
    else if(!emailCheck(emailValue)) {
        setError(email, "Email is not valid");
    }
    else {
        setSuccess(email, "Accepted Input");
    }

    if(phoneValue === "") {
        setError(phone, "Phone Number is required");
    }
    else if(!phoneCheck(phoneValue)) {
        setError(phone, "It must start with + and contain 14 numbers after the +")
    }
    else {
        setSuccess(phone, "Accepted Input");
    }

    if(passwordValue === "") {
        setError(password, "Password cannot be blank");
    }
    else if(!passwordCheck(passwordValue)) {
        setError(password, "It must contain at least 1 upper, numeric and be more than 6 character");
    }
    else {
        setSuccess(password, "Accepted Input");
    }
}

function setError(value,message) {
    const formControl = value.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccess(value,message) {
    const formControl = value.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control success";
}

function nameCheck(fullname) {
    const getName = /^[a-z][a-z\s]*$ | [a-zA-Z ]*$/
    return getName.test(String(fullname).toLowerCase()); 
}

function emailCheck(email) {
    const getEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return getEmail.test(String(email).toLowerCase());
}

function phoneCheck(phone) {
    const getPhone = /^\+?([0-9]{3})\)?([0-9]{4})?([0-9]{4})?([0-9]{3})$/;
    return getPhone.test(phone);
}

function passwordCheck(password) {
    const getPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    return getPassword.test(password);
  }