function formvalidation(){
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const pincode = document.getElementById("pincode").value;
    const password = document.getElementById("password").value;
    const namerule =  /^[a-z]+$/i;
    const pincoderule = /^\d{6}$/;
    const emailrule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const contactrule = /^\d{10}$/;
    const passwordrule = /^(?=.*\d)(?=.*[a-zA-Z])/;


    //  js for the name field...
if(name.match(namerule)){
    document.getElementById("name").style.border = "2px solid green";
    document.getElementById("message1").innerHTML = "";
    
}   
    
else{
    document.getElementById("name").style.border = "2px solid orangered";
    document.getElementById("message1").innerHTML = "Invalid text";
   
}
// js for the dob field...

if(dob === ""){
    document.getElementById("message2").innerHTML="Invalid date*";
    document.getElementById("dob").style.border = "2px solid orangered";
    
}
else{
    document.getElementById("dob").style.border = "2px solid green"
    document.getElementById("message2").innerHTML="";
    
}

// js for the contact field...
if(contact.match(contactrule)){
    document.getElementById("contact").style.border = "2px solid green";
    document.getElementById("message3").innerHTML="";
    
}
else{
    document.getElementById("message3").innerHTML="Invalid number*";
    document.getElementById("contact").style.border = "2px solid orangered";
    
}
// js for the email field...

if(email.match(emailrule)){
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("message4").innerHTML="";
}
else{
    document.getElementById("message4").innerHTML="Invalid Mail Id*";
    document.getElementById("email").style.border = "2px solid orangered";
}
// js for the pincode field...

if(pincode.match(pincoderule)){
    document.getElementById("pincode").style.border = "2px solid green";
    document.getElementById("message6").innerHTML="";
}
else{
    document.getElementById("message6").innerHTML="Invalid pincode*";
    document.getElementById("pincode").style.border = "2px solid orangered";
}

// js for the password field

if(password.match(passwordrule)){
    document.getElementById("password").style.border = "2px solid green";
    document.getElementById("message5").innerHTML="";
}
else{
    document.getElementById("message5").innerHTML="create a strong password*";
    document.getElementById("password").style.border = "2px solid orangered";
}


if((name.match(namerule))&&(dob != "")&&(contact.match(contactrule))&&(email.match(emailrule))&&
(password.match(passwordrule))&&(pincode.match(pincoderule))){
    document.getElementById("able").disabled = false;
  }
  else{
    document.getElementById("able").disabled = true;
  }
}    

