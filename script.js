
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirm');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const submitButton = document.getElementById('submit');

let messages = [];

email.addEventListener('input', (event) => {
    if(email.validity.valueMissing) {
        email.setCustomValidity("Email field must not be empty.");
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Email does not match required format, e.g. kyle@website.com");
        //event.preventDefault();
    } else {
        email.setCustomValidity("");
    }

});

country.addEventListener('input', (event) => {
    if(country.validity.valueMissing) {
        country.setCustomValidity("Country field must not be empty.");
    } else {
        country.setCustomValidity("");
    }
});

zipCode.addEventListener('input', (event) => {
    if(zipCode.validity.valueMissing) {
        zipCode.setCustomValidity("Zip code field must not be empty.");
    } else if(zipCode.validity.tooShort) {
        zipCode.setCustomValidity("Zip code field must be at least 6 characters.");
    } else {
        zipCode.setCustomValidity("");
    }
});

password.addEventListener('input', (event) => {
    if(password.validity.valueMissing) {
        password.setCustomValidity("Password field must not be empty.");
    } else {
        password.setCustomValidity("");
    }
});

confirmPassword.addEventListener('input', (event) => {
    if(confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity("Password field must not be empty.");
    } else if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords must match.");
    } else {
        confirmPassword.setCustomValidity("");
    }


});



/*
    if(password.value != confirmPassword.value) {

        confirmPassword.setCustomValidity("Passwords do not match");

        e.preventDefault();
    } else {
        confirmPassword.setCustomValidity("");
    }
    */