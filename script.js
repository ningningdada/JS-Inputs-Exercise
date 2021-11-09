const button = document.querySelector('#submitButton');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let spinner = document.querySelector('.loader');
let lastWord = document.querySelector('.last-word');


function passwordValidation() {
  if (!password.value) {
    password.style.border = '2px solid';
    password.style.borderRadius = '2px'
    password.style.borderColor = '#ff0000';
  }
  else {
    password.style.border = '1px solid';
    password.style.borderRadius = '2px'
  }
}

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function removeSpinner() {
  spinner.style.display = 'none';
  lastWord.style.visibility = `visible`;
}

function emailValidation() {
  if (validateEmail(email.value)){
    button.style.visibility = "hidden";
    email.style.border = '1px solid';
    email.style.borderRadius = '2px';
    email.style.borderColor = '#000000';
    spinner.style.visibility = `visible`;
    setTimeout(removeSpinner, 3000);
  }
  else{
    email.style.border = '2px solid';
    email.style.borderRadius = '2px';
    email.style.borderColor = '#ff0000';
    }
}

button.addEventListener('click', e => {
  passwordValidation();
  emailValidation();
});