function jsontable(){
    var jsonjs = [
    {
        "Name":"Kanimozhi",
        "Date Of Birth":"12.06.2002",
        "Contact No.":"6381238885",
        "E-mail":"kanimozhi12062002@gmail.com",
        "Gender":"Female",
        "Password":"R@mkani26",
        "Pincode":"641607",
        "State":"Tamilnadu",
    },
    {
        "Name":"Tamilmozhi",
        "Date Of Birth":"05.06.2004",
        "Contact No.":"9095027576",
        "E-mail":"tamil05@gmail.com",
        "Gender":"Female",
        "Password":"R@mtamil26",
        "Pincode":"641607",
        "State":"Tamilnadu",  
    }
    ]

    // Extract value from table header. 

    var column = [];
    for (let i = 0; i < jsonjs.length; i++){
        for(let key in  jsonjs[i]){
            if (column.indexOf(key) === -1){
                column.push(key);
            }
        }
    }

    // create table

    const table = document.createElement("table");

    // Create table header row using the extracted headers above.
   
    let tr = table.insertRow(-1);                   // table row

    for (let i = 0; i < column.length; i++) {
      let th = document.createElement("th");      // table header.
      th.innerHTML = column[i];
      tr.appendChild(th);
    }

     // add json data to the table as rows.

     for (let i = 0; i < jsonjs.length; i++) {

        tr = table.insertRow(-1);
  
        for (let j = 0; j < column.length; j++) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = jsonjs[i][column[j]];
        }
      }
      const you = document.getElementById("name").value;
      const phone = document.getElementById("contact").value;
      const rule = document.getElementById("email").value;
      const pin = document.getElementById("pincode").value;
      const pass = document.getElementById("password").value;
      // const male = document.querySelector("input[id='male']:checked");
      const female = document.getElementById("female");  
      const other = document.getElementById("other"); 
      // const female = document.querySelector("input[id='female']:checked");
      // const other = document.querySelector("input[id='other']:checked");


      let object = new Object();    
      if(you.match( /^[a-z]+$/i)){
        object.first = document.getElementById('name').value;
      }
      else{
        object.first = "";
      }
      object.second = document.getElementById('dob').value;  
      if(phone.match(/^\d{10}$/)){
        object.third = document.getElementById('contact').value;
      }
      else{
        object.third = "";
      }
        
      if(rule.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        object.fourth = document.getElementById('email').value;
      }
      else{
        object.fourth = "";
      }
      // if(male != null){
      //   object.fifth= "male";
      // }
      // else if(female != null){
      //   object.fifth= "female";
      // }
      // else if(other != null){
      //   object.fifth= "other";
      // }
      // else{
      //   object.fifth= ""; 
      // }
      if (male.checked){
        object.fifth= "male";
      }
      else if(female.checked){
          object.fifth= "female";
        }
        else if(other.checked){
          object.fifth= "other";
        }
        else{
          object.fifth= ""; 
        }
      
      if(pass.match( /^(?=.*\d)(?=.*[a-zA-Z])/)){
        object.sixth = document.getElementById('password').value;
      }
      else{
        object.sixth = "";
      }
      if(pin.match(/^\d{6}$/)){
        object.seventh = document.getElementById('pincode').value;
      }
      else{
        object.seventh = "";
      }
      object.eigth = document.getElementById('State').value
      
      let tro = table.insertRow();
        for(let x in object){
        let cell = tro.insertCell();
        cell.innerHTML = object[x];
        }

      // Now, add the newly created table with json data, to a container.

    const divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
  }
