
//Є текстове поле, куди користувач повинен ввести E-mail.

// Якщо поле проходить перевірку, воно повинно мати зелене підсвічування;
// Якщо ні, то червоний.

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector ('input');
function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}
input.addEventListener('input', onInput);
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}