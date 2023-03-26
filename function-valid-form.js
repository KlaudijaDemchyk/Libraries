//JavaScript Form Validation Example
//In this example, we are going to validate the name and password.
// The name can’t be empty and password can’t be less than 6 characters long.
export function validateForm(name, password) {
    if (name === "") {
        document.getElementById("form-error").innerHTML = "Name can't be blank";
        return false;
    } else if (password.length < 6) {
        document.getElementById("form-error").innerHTML = "Password must be at least 6 characters long.";
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