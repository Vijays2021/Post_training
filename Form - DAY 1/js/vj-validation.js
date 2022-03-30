// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {

    // Retrieving the values of form elements
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    // Defining error variables with a default value
    var nameErr = emailErr = numberErr = true;

    // Validate firstname
    if (fname == "") {
        printError("nameErr", "Firstname cannot be empty");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) == false) {
            printError("nameErr", "Invalid characters, alphabets only");
        } else if (fname.length <= 4) {
            printError("nameErr", "Please enter more than 5 characters");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
    if (email == "") {
        printError("emailErr", "Email is a required field");
    }

    else if (regexEmail.test(email) == false) {
        printError("emailErr", "Invalid, (e.g : vijay@gmail.com)");
    }
    else {
        printError("emailErr", "");
        emailErr = false;
    }

    // Validate Phone number
    var regexNumber = /^\d{10}$/;
    if (number == "") {
        printError("numberErr", "Phone number is a required field");
    }

    else if (regexNumber.test(number) == false) {
        printError("numberErr", "Invalid characters or 10 numbers only");
    }
    else {
        printError("numberErr", "");
        numberErr = false;
    }


    // Prevent the form from being submitted if there are any errors
    if (nameErr == emailErr == numberErr == true) {
        return false;
    } else {
        console.log("Form data if required");
    }

    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById("myForm").submit();

    });

}