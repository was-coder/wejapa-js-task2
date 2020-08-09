const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const passCheck = document.getElementById("pass-check");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    getValues();
});

function getValues() {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const passCheckValue = passCheck.value.trim();

    if(fullnameValue === "") {
        setError(fullname, "Fullname cannot be blank");
    }
    else {
        setSuccess(fullname, "Accepted Input");
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