function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validate_fname() {
    var name = document.getElementById('firstname').value;

    var nameErr = true;

    if (name == "") {
        printError("nameErr", "Field cannot be empty");
        document.myForm.firstname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) == false) {
            printError("nameErr", "Alphabets only please");
            document.myForm.firstname.focus()
        } else if (name.length <= 4) {
            printError("nameErr", "Should be 5 characters");
            document.myForm.firstname.focus()
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate_lname() {
    var name = document.getElementById('lastname').value;

    var nameErr = true;

    if (name == "") {
        printError("nameErr", "Field cannot be empty");
        document.myForm.lastname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) == false) {
            printError("nameErr", "Alphabets only please");
            document.myForm.lastname.focus()
        } else if (name.length <= 4) {
            printError("nameErr", "Should be 5 characters");
            document.myForm.lastname.focus()
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate_mname() {
    var name = document.getElementById('mothername').value;

    var mnameErr = true;

    if (name == "") {
        printError("mnameErr", "Field cannot be empty");
        document.myForm.mothername.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) == false) {
            printError("mnameErr", "Alphabets only please");
            document.myForm.mothername.focus()

        } else if (name.length <= 4) {
            printError("mnameErr", "Should be 5 characters");
            document.myForm.mothername.focus()
        } else {
            printError("mnameErr", "");
            mnameErr = false;
        }
    }
}

function validate_date() {
    var user_date = document.getElementById('date').value

    var today = new Date();

    var user_year = new Date(user_date).getFullYear();
    var user_month = new Date(user_date).getMonth() + 1;
    var user_day = new Date(user_date).getDate();

    var dateErr = true;

    console.log(user_year == today.getFullYear());
    console.log(user_month > today.getMonth() + 1);

    if (user_date == "") {
        printError("dateErr", "Field cannot be empty");
        document.myForm.date.focus()
    }
    else if (user_year > today.getFullYear()) {
        printError("dateErr", "Year shouldn't be future");
        document.myForm.date.focus()
    }
    else if (user_year == today.getFullYear() && user_month > today.getMonth() + 1) {
        printError("dateErr", "Month shouldn't be future");
        document.myForm.date.focus()

    }
    else if (user_year == today.getFullYear() && user_month == today.getMonth() + 1 && user_day > today.getDate()) {
        printError("dateErr", "Date shouldn't be future");
        document.myForm.date.focus()
    }
    else {
        printError("dateErr", "");
        dateErr = false;
    }
}

function validate_country() {

    var countryErr = true;

    if (document.getElementById('country').value == "country") {
        printError("countryErr", "Please select your country");
        document.myForm.country.focus()
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
}

function validate_email() {
    var email = document.getElementById('email').value;

    var emailErr = true;

    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
    if (email == "") {
        printError("emailErr", "Field cannot be empty");
        document.myForm.email.focus()
    }

    else if (regexEmail.test(email) == false) {
        printError("emailErr", "Please enter valid email");
        document.myForm.email.focus()
    }
    else {
        printError("emailErr", "");
        emailErr = false;
    }
}

function validate_password() {
    var password = document.getElementById('password').value;

    var passwordErr = true;

    if (password == "") {
        printError("passwordErr", "Field cannot be empty");
        document.myForm.password.focus()
    } else if (password.length <= 8) {
        printError("passwordErr", "Should be 8 characters");
        document.myForm.password.focus()
    }

    else {
        printError("passwordErr", "");
        passwordErr = false;
    }
}

function validate_confirmpassword() {
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    var confirmpasswordErr = true;

    if (confirmpassword == "") {
        printError("confirmpasswordErr", "Field cannot be empty");
        document.myForm.confirmpassword.focus()
    }
    else if (password != confirmpassword) {
        printError("confirmpasswordErr", "Doesn't match with password");
        document.myForm.confirmpassword.focus()
    }

    else {
        printError("confirmpasswordErr", "");
        confirmpasswordErr = false;
    }
}
function validate_number() {
    var number = document.getElementById('number').value;

    var numberErr = true;

    var regexNumber = /^\d{10}$/;
    if (number == "") {
        printError("numberErr", "Field cannot be empty");
        document.myForm.number.focus()
    }

    else if (regexNumber.test(number) == false) {
        printError("numberErr", "Not a valid 10-digit number");
        document.myForm.number.focus()
    }
    else {
        printError("numberErr", "");
        numberErr = false;
    }
}

function validate_checkbox() {
    var checkbox = document.getElementById('checkbox');

    var checkboxErr = true;

    if (checkbox.checked) {
        printError("checkboxErr", "");
        checkboxErr = false;

    }
    else {
        printError("checkboxErr", "Please indicate that you accept the Terms and Conditions");
        document.myForm.checkbox.focus()
    }
}

function validate_gender() {
    var male = document.getElementById('male');
    var female = document.getElementById('female');

    genderErr = true;

    if (male.checked || female.checked) {
        printError("genderErr", "");

    }
    else {
        printError("genderErr", "Please select a gender");
        
    }
}

// function submit_button() {
//     validate_checkbox();
//     validateCaptcha();

// }


var code;
function createCaptcha() {
    //clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
    event.preventDefault();
    
    if (document.getElementById("cpatchaTextBox").value == code) {
        printError("captchaErr", "")
    } else {
        printError("captchaErr", "Invalid Captcha, try again")
        createCaptcha();
    }
}





