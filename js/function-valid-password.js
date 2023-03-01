//JavaScript Retype Password Validation
function matchpass(firstpassword, secondpassword) {
    if (firstpassword == secondpassword) {
        return true;
    } else {
        alert("password must be same!");
        return false;
    }
}