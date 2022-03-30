function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate_fname(){
    var fname = document.getElementById('fname').value;

    var nameErr = true;

    if(fname == "") {
        printError("nameErr", "Firstname cannot be empty");
        document.myForm.fname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) == false) {
            printError("nameErr", "Invalid characters, alphabets only");
            document.myForm.fname.focus()
        }  else if(fname.length <= 4 ){
            printError("nameErr", "Firstname must be at least 5 characters");
            document.myForm.fname.focus()
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
}

function validate_lname(){
    var lname = document.getElementById('lname').value;

    var lastnameErr = true;

    if(lname == "") {
        printError("lastnameErr", "Lastname cannot be empty");
        document.myForm.lname.focus()
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) == false) {
            printError("lastnameErr", "Invalid characters, alphabets only");
            document.myForm.lname.focus()
        }  else if(lname.length <= 4 ){
            printError("lastnameErr", "Lastname must be at least 5 characters");
            document.myForm.lname.focus()
        }else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }
}

function validate_email(){
    var email = document.getElementById('email').value;

    var emailErr = true;

    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/; 
    if(email == "") {
        printError("emailErr", "Email is a required field");
        document.myForm.email.focus()
    } 
    
    else if(regexEmail.test(email) == false){
        printError("emailErr", "Invalid, (e.g : vijay@gmail.com)");
        document.myForm.email.focus()
    }
     else {
            printError("emailErr", "");
            emailErr = false;
        }
}

function validate_number(){
    var number = document.getElementById('number').value;

    var numberErr = true;

    var regexNumber = /^\d{10}$/; 
    if(number == "") {
        printError("numberErr", "Phone number is a required field");
        document.myForm.number.focus()
    } 
    
    else if(regexNumber.test(number) == false){
        printError("numberErr", "Invalid characters or must be 10 numbers only");
        document.myForm.number.focus()
    }
     else {
            printError("numberErr", "");
            numberErr = false;
        }
}

function validate_password(){
    var password = document.getElementById('password').value;

    var password1Err = true;

    if(password == ""){
        printError("password1Err", "Password field cannot be empty");
    }  else {
        printError("password1Err", "");
        password1Err = false;
    }
}

function validate_cpassword(){
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var cpasswordErr = true;

    if(cpassword == ""){
        printError("cpasswordErr", "Confirm password field cannot be empty");
    }
    else if(password != cpassword){
        printError("cpasswordErr", "Doesn't match with password");
        }
    
    else {
        printError("cpasswordErr", "");
        cpasswordErr = false;
    }

}
document.getElementById('btnRegister').disabled = false;

