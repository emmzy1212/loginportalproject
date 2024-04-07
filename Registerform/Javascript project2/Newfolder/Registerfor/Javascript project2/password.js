let password = "Staylow";
let username = "john";
let attempts = 3;
let input;

let submit = document.getElementById('submit');

function login() {
    let usernameField = document.getElementById('username');
    let passwordField = document.getElementById('pass').value;

    let validPass = password === passwordField;
    let validUsername = username === usernameField.value;

    let usernameE = usernameField.value;
    console.log(usernameE);

    if (validUsername && validPass) {
        alert("Access granted");
        alert(`Welcome ${usernameE}`);
        // Navigate to a new file location
        window.location.href = 'form.html'; // Replace 'new_page.html' with your desired file location
    } else {
        alert('Password and username do not match or fields are not filled correctly. Please try again.');
    }
}
