function CheckNumber() {
    var num = document.myform3.number.value;
       validate(num);
    function validate(num,error) {
           if (isNaN(num)) {
           alert("Enter Numeric value only");
            return false;
        } else {
            return true;
        }
    }
}
function CheckForm() {
    var nameInput = document.myform.name.value;
    var passwordInput = document.myform.password.value;
    validateform(nameInput, passwordInput);
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
}
function CheckPaswordTwice() {
    var firstpassword = document.myform2.password.value;
    var secondpassword = document.myform2.password2.value;
    matchpass(firstpassword, secondpassword);
    function matchpass(firstpassword, secondpassword) {
        if (firstpassword == secondpassword) {
            return true;
        } else {
            alert("password must be same!");
            return false;
        }
    }
}

