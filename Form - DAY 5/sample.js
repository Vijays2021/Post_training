function date_validation(){
    var user_date = document.getElementById('exp-date').value
    //console.log(user_date);

    var today = new Date();
    //console.log(today);

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //console.log(date);

    var user_year = new Date(user_date).getFullYear();
    //console.log(user_year);
    var user_month = new Date(user_date).getMonth()+1;
    var user_day = new Date(user_date).getDate();

     if (user_year < today.getFullYear()){
         console.log("Year must be greater or equal");
     } 
     
    else if (user_month <= today.getMonth()+1 && user_day <= today.getDate() ){
        console.log("Invalid date");
    }
     
     else{
         console.log("Validation done successfully!!")
     }

    }
