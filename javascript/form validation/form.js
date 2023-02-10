
function formvalidation(){
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const plate = document.getElementById("plate").value;

// js for the name field...

if(name === ""){
    document.getElementById("message1").innerHTML = "Invalid text*";
    document.getElementById("name").style.border = "2px solid orangered";
    //document.getElementById("name1").style.border = "2px solid orangered";
   // document.getElementsByClassName(form-control-wrong-i.fa-exclamation-circle);
    
}   

else{
    document.getElementById("message1").innerHTML="ok";
    document.getElementById("name").style.border = "2px solid green";
    //document.getElementById("name1").style.border = "2px solid green";
    //document.getElementsByClassName(form-control-correct-i.fa-check-circle);
}

// js for the dob field...

if(dob === ""){
    document.getElementById("message2").innerHTML="Invalid date*";
    document.getElementById("dob").style.border = "2px solid orangered";
}
else{
    document.getElementById("message2").innerHTML="ok";
    document.getElementById("dob").style.border = "2px solid green";
}

// js for the contact field...

if(contact === ""){
    document.getElementById("message3").innerHTML="Invalid number*";
    document.getElementById("contact").style.border = "2px solid orangered";
    document.getElementById("contact1").style.border = "2px solid orangered";
}
else{
    document.getElementById("message3").innerHTML="ok";
    document.getElementById("contact").style.border = "2px solid green";
    document.getElementById("contact1").style.border = "2px solid green";
}

// js for the email field...

if(email === ""){
    document.getElementById("message4").innerHTML="Invalid Mail Id*";
    document.getElementById("email").style.border = "2px solid orangered";
}
else{
    document.getElementById("message4").innerHTML="ok";
    document.getElementById("email").style.border = "2px solid green";
}

// js for the address field...

if(address === ""){
    document.getElementById("message5").innerHTML="Address is mandatory*";
    document.getElementById("address").style.border = "2px solid orangered";
}
else{
    document.getElementById("message5").innerHTML="ok";
    document.getElementById("address").style.border = "2px solid green";
}

// js for the make field...

if(make === ""){
    document.getElementById("message6").innerHTML="Invalid*";
    document.getElementById("make").style.border = "2px solid orangered";
}
else{
    document.getElementById("message6").innerHTML="ok";
    document.getElementById("make").style.border = "2px solid green";
}

// js for the model field...

if(model === ""){
    document.getElementById("message7").innerHTML="Invalid model name*";
    document.getElementById("model").style.border = "2px solid orangered";
}
else{
    document.getElementById("message7").innerHTML="ok";
    document.getElementById("model").style.border = "2px solid green";
}

// js for the plate field...

if(plate === ""){
    document.getElementById("message8").innerHTML="Invalid*";
    document.getElementById("plate").style.border = "2px solid orangered";
}
else{
    document.getElementById("message8").innerHTML="ok";
    document.getElementById("plate").style.border = "2px solid green";
}
} 


