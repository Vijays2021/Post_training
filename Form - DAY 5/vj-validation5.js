function date_validation(){
    var user_date = document.getElementById('exp-date').value;

    var user_year = new Date(user_date).getFullYear();
    var user_month = new Date(user_date).getMonth()+1;
    var user_day = new Date(user_date).getDate();

    var today = new Date();

    var expdateErr = true;

    if(user_date == "") {
               printError("expdateErr", "*Required*");
            } 

     else if (user_year < today.getFullYear()){
         printError("expdateErr", "*Year should be future*");
        } 

    else if (user_year == today.getFullYear()  && user_month < today.getMonth()+1 ){
        printError("expdateErr", "*Month should be future*");
    }
    else if (user_year == today.getFullYear() && user_month == today.getMonth() + 1 && user_day <= today.getDate()) {
        printError("expdateErr", "*Date should be future*");
    }
     else{
        printError("expdateErr","");
        expdateErr = false;
     }
    }

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    function validate_checkbox(){
        var checkbox = document.getElementById('flexCheckDefault');

        var checkboxErr = true;

        if(checkbox.checked){
            printError("checkboxErr","");
            checkboxErr = false;
        }
            else{
                printError("checkboxErr","*Please indicate that you accept the Terms of Service*");
            }
        }
    
       
          
        
        function validate_name(){
            var name = document.getElementById('name').value;
        
            var nameErr = true;
        
            if(name == "") {
                printError("nameErr", "*Required*");
            } else {
                var regex = /^[a-zA-Z\s]+$/;                
                if(regex.test(name) == false) {
                    printError("nameErr", "*Invalid characters, alphabets only*");
                }  else if(name.length <= 4 ){
                    printError("nameErr", "*Name must be at least 5 characters*");
                }else {
                    printError("nameErr", "");
                    nameErr = false;
                }
            }
        }
        
        function validate_cvv(){
            var cvv = document.getElementById('cvv').value;
        
            var cvvErr = true;
        
            var regexcvv = /^\d{3}$/; 
            if(cvv == "") {
                printError("cvvErr", "*Required*");
            } 
            
            else if(regexcvv.test(cvv) == false){
                printError("cvvErr", "*Invalid CVV*");
                }
             else {
                    printError("cvvErr", "");
                    cvvErr = false;
                }
        }
        function validate_cardnumber(){
            var cardnumber = document.getElementById('cardnumber').value;
        
            var cardnumberErr = true;
        
            var regexcardnumber = /^\d{16}$/; 
            if(cardnumber == "") {
                printError("cardnumberErr", "*Required*");
            } 
            
            else if(regexcardnumber.test(cardnumber) == false){
                printError("cardnumberErr", "*Invalid, Card Number must be 16 digits*");
                   }
             else {
                    printError("cardnumberErr", "");
                    cardnumberErr = false;
                }
        }
    
        