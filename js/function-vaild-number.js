//validate the textfield for numeric value only
function validate(num,error) {
    if (isNaN(num)) {
        error.innerHTML = "Enter Numeric value only";
        return false;
    } else {
        return true;
    }
}