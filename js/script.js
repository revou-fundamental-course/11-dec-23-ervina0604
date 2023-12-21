// JavaScript for filling the name on the homepage
document.addEventListener('DOMContentLoaded', function () {
    var name = prompt("Ervina");
    if (name !== null) {
        document.getElementById('welcome-message').innerHTML = "Hi " + name;
    }
});

// JavaScript for form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name === ""  email === ""  phone === "" || message === "") {
        alert("Please fill out all fields");
        return false;
    }

    // Add more validation rules as needed

    return true;
}