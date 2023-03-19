function validateNumericInput(inputValue) {
    return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
}

function validateForm(name, password) {
    if (name.trim() === "") {
        document.getElementById("form-error").innerHTML = "Name can't be blank";
        return false;
    } else if (password.length < 6) {
        document.getElementById("form-error").innerHTML = "Password must be at least 6 characters long.";
        return false;
    } else {
        return true;
    }
}

function passwordsMatch(firstPassword, secondPassword) {
    return firstPassword === secondPassword;
}

function checkNumber() {
    const num = document.myform3.number.value.trim();
    if (!validateNumericInput(num)) {
        document.getElementById("num-error").innerHTML = "Enter numeric value only";
        return false;
    } else {
        return true;
    }
}

function checkForm() {
    const nameInput = document.myform.name.value.trim();
    const passwordInput = document.myform.password.value.trim();
    if (validateForm(nameInput, passwordInput)) {
        return true;
    } else {
        return false;
    }
}

function checkPasswordTwice() {
    const firstPassword = document.myform2.password.value.trim();
    const secondPassword = document.myform2.password2.value.trim();
    if (passwordsMatch(firstPassword, secondPassword)) {
        return true;
    } else {
        document.getElementById("password-error").innerHTML = "Passwords must match!";
        return false;
    }
}