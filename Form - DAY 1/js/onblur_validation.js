// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate firstname
function validate_fname() {

    //Retrieving the value from the user
    var fname = document.getElementById('fname').value;

    var nameErr = true;

    // Validate firstname
    if (fname == "") {
        printError("nameErr", "Firstname cannot be empty");
        document.myForm.fname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) == false) {
            printError("nameErr", "Invalid characters, alphabets only");
            document.myForm.fname.focus()
        } else if (fname.length <= 4) {
            printError("nameErr", "Firstname must be at least 5 characters");
            document.myForm.fname.focus()
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

// Defining a function to validate lastname
function validate_lname() {
    var lname = document.getElementById('lname').value;

    var lastnameErr = true;

    if (lname == "") {
        printError("lastnameErr", "Lastname cannot be empty");
        document.myForm.lname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname) == false) {
            printError("lastnameErr", "Invalid characters, alphabets only");
            document.myForm.lname.focus()
        } else if (lname.length <= 4) {
            printError("lastnameErr", "Lastname must be at least 5 characters");
            document.myForm.lname.focus()
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }

}

// Defining a function to validate email
function validate_email() {
    var email = document.getElementById('email').value;

    var emailErr = true;

    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
    if (email == "") {
        printError("emailErr", "Email is a required field");
        document.myForm.email.focus()
    }

    else if (regexEmail.test(email) == false) {
        printError("emailErr", "Invalid, (e.g : vijay@gmail.com)");
        document.myForm.email.focus()
    }
    else {
        printError("emailErr", "");
        emailErr = false;
    }
}

// Defining a function to validate phone number
function validate_number() {
    var number = document.getElementById('number').value;

    var numberErr = true;

    var regexNumber = /^\d{10}$/;
    if (number == "") {
        printError("numberErr", "Phone number is a required field");
        document.myForm.number.focus()
    }

    else if (regexNumber.test(number) == false) {
        printError("numberErr", "Invalid characters or 10 numbers only");
        document.myForm.number.focus()
    }
    else {
        printError("numberErr", "");
        numberErr = false;
    }
}

// Defining a function to validate billing address
function validate_billing() {
    var add = document.getElementById('add').value;

    var addErr = true;

    if (add == "") {
        printError("addErr", "Billing address is a required field");
        document.myForm.billing.focus()
    } else {
        var regexBill = /^[a-zA-Z\s]+$/;
        if (regexBill.test(add) == false) {
            printError("addErr", "Invalid characters, alphabets only");
            document.myForm.billing.focus()
        } else {
            printError("addErr", "");
            addErr = false;
        }
    }
}

// Defining a function to validate address
function validate_address() {
    var add1 = document.getElementById('add1').value;

    var add1Err = true;

    if (add1 == "") {
        printError("add1Err", "Address is a required field");
        document.myForm.address.focus()
    } else {
        var regexAdd1 = /^[a-zA-Z\s]+$/;
        if (regexAdd1.test(add1) == false) {
            printError("add1Err", "Invalid characters, alphabets only");
            document.myForm.address.focus()
        } else {
            printError("add1Err", "");
            add1Err = false;
        }
    }

}

// Defining a function to validate city
function validate_city() {
    var city = document.getElementById('city').value;

    var cityErr = true;

    if (city == "") {
        printError("cityErr", "Please enter your city");
        document.myForm.city.focus()
    } else {
        var regexcity = /^[a-zA-Z\s]+$/;
        if (regexcity.test(city) == false) {
            printError("cityErr", "Invalid characters, alphabets only");
            document.myForm.city.focus()
        } else {
            printError("cityErr", "");
            cityErr = false;
        }
    }

}

// Defining a function to validate state
function validate_state() {
    var state = document.getElementById('state').value;

    var stateErr = true;

    if (state == "") {
        printError("stateErr", "Please enter your state");
        document.myForm.state.focus()
    } else {
        var regexstate = /^[a-zA-Z\s]+$/;
        if (regexstate.test(state) == false) {
            printError("stateErr", "Invalid characters, alphabets only");
            document.myForm.state.focus()
        } else {
            printError("stateErr", "");
            stateErr = false;
        }
    }

}

// Defining a function to validate zipcode
function validate_zipcode() {
    var zip = document.getElementById('zip').value;

    var zipErr = true;

    if (zip == "") {
        printError("zipErr", "Please enter your zip");
        document.myForm.zipcode.focus()
    } else {
        var regexzip = /^\d{6}$/;
        if (regexzip.test(zip) == false) {
            printError("zipErr", "Invalid characters, 6 numbers only");
            document.myForm.zipcode.focus()
        } else {
            printError("zipErr", "");
            zipErr = false;
        }
    }
}


// Defining a function to validate country
function validate_country() {

    var countryErr = true;

    if (document.getElementById('country').value == "country") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
}