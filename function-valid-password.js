//JavaScript Retype Password Validation
function passwordsMatch(firstPassword, secondPassword) {
    return firstPassword === secondPassword;
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