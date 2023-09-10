let password = document.getElementById('password');
let confirmPassword = document.getElementById('conf_pass');

password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('change', validatePassword);

let submitButton = document.querySelector('button[type="submit"]');
let warning = document.getElementById('password-warning');


function validatePassword(e) {

    if (password.value === confirmPassword.value){
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        submitButton.disabled = false;
        warning.innerHTML = '';
    } else {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        submitButton.disabled = true;
        warning.innerHTML = '*Passwords must match';
    }

}