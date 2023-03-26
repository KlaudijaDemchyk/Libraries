//validate the textfield for numeric value only
export function validateNumericInput(inputValue) {
    return !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
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