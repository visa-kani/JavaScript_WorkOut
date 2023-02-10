function formvalidation(){
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const plate = document.getElementById("plate").value;
    const regdate = document.getElementById("regdate").value;
    const namerule =  /^[a-z]+$/i;
    const addressrule = /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
    const emailrule = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    const contactrule = /^\d{10}$/;

// js for the name field...
if(name.match(namerule)){
    document.getElementById("name").style.border = "4px solid green";
    document.getElementById("name1").style.border = "4px solid green";
    document.getElementById("message1").innerHTML = "";
}   

else{
    document.getElementById("message1").innerHTML = "Invalid text*";
    document.getElementById("name").style.border = "2px solid orangered";
    document.getElementById("name1").style.border = "2px solid orangered";
}

// js for the dob field...

if(dob === ""){
    document.getElementById("message2").innerHTML="Invalid date*";
    document.getElementById("dob").style.border = "2px solid orangered";
}
else{
    document.getElementById("dob").style.border = "4px solid green"
    document.getElementById("message2").innerHTML="";
}

// js for the contact field...
if(contact.match(contactrule)){
    document.getElementById("contact").style.border = "4px solid green";
    document.getElementById("contact1").style.border = "4px solid green";
    document.getElementById("message3").innerHTML="";
}
else{
    document.getElementById("message3").innerHTML="Invalid number*";
    document.getElementById("contact").style.border = "2px solid orangered";
    document.getElementById("contact1").style.border = "2px solid orangered";
}

// js for the email field...

if(email.match(emailrule)){
    document.getElementById("email").style.border = "4px solid green";
    document.getElementById("message4").innerHTML="";
}
else{
    document.getElementById("message4").innerHTML="Invalid Mail Id*";
    document.getElementById("email").style.border = "2px solid orangered";
}

// js for the address field...

if(address.match(addressrule)){
    document.getElementById("address").style.border = "4px solid green";
    document.getElementById("message5").innerHTML="";
}
else{
    document.getElementById("message5").innerHTML="Address is mandatory*";
    document.getElementById("address").style.border = "2px solid orangered";
}

// js for the make field...

if(make === ""){
    document.getElementById("message6").innerHTML="Invalid*";
    document.getElementById("make").style.border = "2px solid orangered";
}
else{
    document.getElementById("make").style.border = "4px solid green";
    document.getElementById("message6").innerHTML="";
}

// js for the model field...

if(model === ""){
    document.getElementById("message7").innerHTML="Invalid model name*";
    document.getElementById("model").style.border = "2px solid orangered";
}
else{
    document.getElementById("model").style.border = "4px solid green";
    document.getElementById("message7").innerHTML="";
}

// js for the plate field...

if(plate === ""){
    document.getElementById("message8").innerHTML="Invalid*";
    document.getElementById("plate").style.border = "2px solid orangered";
}
else{
    document.getElementById("plate").style.border = "4px solid green";
    document.getElementById("message8").innerHTML="";
}

// js for the registed date

if(regdate === ""){
    document.getElementById("message9").innerHTML="mandatory*";
    document.getElementById("regdate").style.border = "2px solid orangered";
}
else{
    document.getElementById("regdate").style.border = "4px solid green"
    document.getElementById("message9").innerHTML="";
}
} 
    function alertfunction() {
    alert("Registered Successfully ");
  }
