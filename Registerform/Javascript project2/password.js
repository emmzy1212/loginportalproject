let password = "Staylow";
let username = "john";
let attempts = 3;
let input;

let submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission default behavior

    let usernameField = document.getElementById('username').value;
    let passwordField = document.getElementById('pass').value;

    let validPass = password === passwordField;
    let validUsername = username === usernameField;

    if (validUsername && validPass) {
        alert("Access granted");
        alert(`Welcome ${usernameField}`);
        // Navigate to a new file location
        location.href = "form.html"; // Replace 'form.html' with your desired file location
    } else {
        alert('Password and username do not match or fields are not filled correctly. Please try again.');
    }
});
