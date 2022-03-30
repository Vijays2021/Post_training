function onClick_home(){

    document.getElementById('profile') .classList.remove("active");
 document.getElementById('home') .classList.add("active");
 
 document.getElementById('home-tab').style.backgroundColor = "white";
    document.getElementById('home-tab').style.color = "#0062cc";
    document.getElementById('home-tab').style.borderTopLeftRadius = "1.5rem";
    document.getElementById('home-tab').style.borderBottomLeftRadius = "1.5rem";
    document.getElementById('home-tab').style.border = "2px solid #0062cc";
    
    document.getElementById('profile-tab').style.backgroundColor = "#0062cc";
    document.getElementById('profile-tab').style.color = "#fff";
 }
 
 function onClick_profile(){
 
 document.getElementById('home') .classList.remove("active");
    document.getElementById('profile') .classList.add("active");
 
    document.getElementById('profile-tab').style.backgroundColor = "white";
    document.getElementById('profile-tab').style.color = "#0062cc";
    document.getElementById('profile-tab').style.borderTopLeftRadius = "1.5rem";
    document.getElementById('profile-tab').style.borderBottomLeftRadius = "1.5rem";
    document.getElementById('profile-tab').style.border = "2px solid #0062cc";
    
    document.getElementById('home-tab').style.backgroundColor = "#0062cc";
    document.getElementById('home-tab').style.color = "#fff";
 
 
 
 
 }