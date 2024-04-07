let password = "Staylow";
let Email = "emmzy1212@yahoo.com"
let attempts = 3;
let input;

let submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission default behavior

    let Email = document.getElementById('inputEmail4').value;
    let passworde = document.getElementById('inputPassword4').value;
    let firstNameField = document.getElementById('inputfirstname').value;
    let lastNameField = document.getElementById('inputlastname').value;

    let EmailE = inputEmail4.value;
    console.log(EmailE);

    if (EmailE === Email && passworde === password) { // Corrected condition
        alert("Access granted");
        alert(`You are now a student of melodia ${firstNameField} ${lastNameField}`);
        // Navigate to a new file location
        location.href = "Newfolder/index-animate.html"; // Replace 'index.html' with your desired file location
    } else {
        alert('Password and email do not match or are incorrect');
        alert('Please fill all fields correctly');
        alert('Try again');
    }
});
