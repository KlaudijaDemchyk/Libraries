const { execSync } = require("child_process");

export function validateNumericInput(inputValue) {
    return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
}

export function validateForm(name, password) {
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

export function passwordsMatch(firstPassword, secondPassword) {
    return firstPassword === secondPassword;
}

export function checkNumber() {
    const num = document.myform3.number.value.trim();
    if (!validateNumericInput(num)) {
        document.getElementById("num-error").innerHTML = "Enter numeric value only";
        return false;
    } else {
        return true;
    }
}
export function checkForm() {
    const nameInput = document.myform.name.value.trim();
    const passwordInput = document.myform.password.value.trim();
    if (validateForm(nameInput, passwordInput)) {
        return true;
    } else {
        return false;
    }
}

export function checkPasswordTwice() {
    const firstPassword = document.myform2.password.value.trim();
    const secondPassword = document.myform2.password2.value.trim();
    if (passwordsMatch(firstPassword, secondPassword)) {
        return true;
    } else {
        document.getElementById("password-error").innerHTML = "Passwords must match!";
        return false;
    }
}
