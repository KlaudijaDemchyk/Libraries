//JavaScript Form Validation Example
//In this example, we are going to validate the name and password.
// The name can’t be empty and password can’t be less than 6 characters long.

function validateform(nameInput, passwordInput) {
    var name = nameInput;
    var password = passwordInput;
    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}