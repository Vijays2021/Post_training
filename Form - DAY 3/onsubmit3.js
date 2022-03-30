function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate_onSubmit(){
    var name = document.getElementById('name').value;

    var nameErr = true;

    if(name == "") {
        printError("nameErr", "Name cannot be empty");
        
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) == false) {
            printError("nameErr", "Invalid characters, alphabets only");
            
        }  else if(name.length <= 4 ){
            printError("nameErr", "Name must be at least 5 characters");
            
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    var email = document.getElementById('email').value;

    var emailErr = true;

    var regexEmail = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/; 
    if(email == "") {
        printError("emailErr", "Email is a required field");
        
    } 
    
    else if(regexEmail.test(email) == false){
        printError("emailErr", "Invalid, (e.g : vijay@gmail.com)");
        
    }
     else {
            printError("emailErr", "");
            emailErr = false;
        }

        var username = document.getElementById('username').value;

    var usernameErr = true;

    var regexusername = /^[a-zA-Z0-9]*$/; 
    if(username == "") {
        printError("usernameErr", "Username cannot be empty");
        
    } 
    
    else if(regexusername.test(username) == false){
        printError("usernameErr", "Special characters not allowed");
        
    }
     else {
            printError("usernameErr", "");
            usernameErr = false;
        }

        var password = document.getElementById('password').value;

        var passwordErr = true;
    
        if(password == ""){
            printError("passwordErr", "Password field cannot be empty");
        }else if(password.length <= 8 ){
            printError("passwordErr", "Should be 8 characters");
           
        } 
        
        else {
            printError("passwordErr", "");
            passwordErr = false;
        }

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

        if(nameErr ==  emailErr == usernameErr == passwordErr ==  cpasswordErr == true) {
            return false;
         } else {
            
             console.log("Fine");
         }
}