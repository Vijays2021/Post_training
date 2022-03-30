function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate_onSubmit(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var nameErr =  lastnameErr = emailErr = numberErr = password1Err =  cpasswordErr =  true;

    if(fname == "") {
        printError("nameErr", "Firstname cannot be empty");
        
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) == false) {
            printError("nameErr", "Invalid characters, alphabets only");
            
        }  else if(fname.length <= 4 ){
            printError("nameErr", "Firstname must be at least 5 characters");
            
        }else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    

    

    if(lname == "") {
        printError("lastnameErr", "Lastname cannot be empty");
        
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) == false) {
            printError("lastnameErr", "Invalid characters, alphabets only");
            
        }  else if(lname.length <= 4 ){
            printError("lastnameErr", "Lastname must be at least 5 characters");
            
        }else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }

    


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


        


    var regexNumber = /^\d{10}$/; 
    if(number == "") {
        printError("numberErr", "Phone number is a required field");
        
    } 
    
    else if(regexNumber.test(number) == false){
        printError("numberErr", "Invalid characters or must be 10 numbers only");
        
    }
     else {
            printError("numberErr", "");
            numberErr = false;
        }

    
    
        if(password == ""){
            printError("password1Err", "Password field cannot be empty");
        }  else {
            printError("password1Err", "");
            password1Err = false;
        }

       

    
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

        if(nameErr ==  lastnameErr == emailErr == numberErr == password1Err ==  cpasswordErr == true) {
            return false;
         } else {
            
             console.log("Fine");
         }
}