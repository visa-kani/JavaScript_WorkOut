//  Task 2string reserve
function stringreverse() {
    let stringvalue = document.getElementById("stringre").value.trim();
    let newString = "";
    for ( i = stringvalue.length-1; i >= 0; i--) {
        newString += stringvalue[i];
    }
    document.getElementById("result1").innerHTML =  newString;
    document.getElementById("result1").style.color = "#888888";
}

// ARRAY JS task3
function arraycombine() {
    let arrayvalue1 = document.getElementById("array1").value;
    let arrayvalue2 = document.getElementById("array2").value;
    let combine = arrayvalue1.concat(arrayvalue2);
    let combination = [];
    let secondhalf = [];
       // array combination
    for(i of combine){
        if (combination.indexOf(i) === -1){
            combination.push(i);
            document.getElementById("result2").innerHTML = "Combined array: " + combination;}
        // array sort
        combination.sort(function(a,b){return a-b});
        document.getElementById("result02").innerHTML = "Sorted arrays: " + combination;}
        // array +2 after the center place
        let center = Math.floor(combination.length/2);
        let firsthalf = combination.slice(0,center);
        for( let i = center; i<combination.length; i++){
        let adding = Number(combination[i])+2;
        secondhalf.push(adding);
        document.getElementById("result002").innerHTML = "The combined array +2 after the center:" + firsthalf +","+"<span>" + secondhalf + "</span>";
        }  
    }
        // input increase decrease Task4
        function inputlength(){
        let inputvalue = document.getElementById("increase").value.length;
        document.getElementById("increase").style.width = inputvalue*10 + "px";}


        // Task5 True or false Anagrams
        function anagram(){
            let stringvalue1 = document.getElementById("input1").value;
            let stringvalue2 = document.getElementById("input2").value;
            let count = 0 ;
            
            for(i = 0; i< stringvalue1.length; i++){
                for(j = 0; j < stringvalue2.length; j++){
                    if(stringvalue1[i] == stringvalue2[j]){
                        count += 1;
                        break;
                    }
                }     
            }
            if(stringvalue1 == "" && stringvalue2 == ""){
                document.getElementById("result4").innerHTML = "check before enter a string"
            }
            else if(stringvalue1.length == count && stringvalue2.length == count){
                document.getElementById("result4").innerHTML = "true"
            }  
            else{
                document.getElementById("result4").innerHTML = "false"
            }
        }
        // Task6 count the numbers of vowels and consontants
                function covo(){
                    let counts = document.getElementById("voco").value;
                    let consontants = "bcdfghjklmnpqrstvwxyz";
                    let vowels = "aeiou";
                    
                    count1 = 0;
                    count2 = 0;
                    for(let i = 0; i < counts.length; i++){
                        for(j = 0;j < consontants.length; j++){
                            if(counts[i] == consontants[j])
                            count1 += 1;
                        }
                    }

                    for(let i = 0; i < counts.length; i++){
                        for(j = 0; j < vowels.length; j++){
                            if(counts[i] == vowels[j])
                            count2 += 1;
                        }
                    
                    }

                 document.getElementById("result5").innerHTML = "consontants" + count1;
                 document.getElementById("result6").innerHTML = "vowels" + vow;    
                        
                }

        // // voewls and cononants
        // function covo(){
        //     let sepvalue = document.getElementById("voco").value;
        //     let consontants = 'bcdfghjklmnpqrstvwyz';
        //     let vowels = 'aeiou';
        //     if (sepvalue == match(consontants)){
        //         document.getElementById("result5").innerHTML = "consontants in the input" +  consontants;
        //     }
        //     else if  (sepvalue === vowels){
        //         document.getElementById("result6").innerHTML = "vowels  in the input" + vowels;
        //     }

        // }
        // Task 07 closure 
       let ram = (function(){
        r = 26;
        return function(){
           r -= 1;
           return r;
        }

      })();
      function closure(){
       document.getElementById("result36").innerHTML = ram();
      }

        // Task 8 display the standard date and time
        function displayd(){
            let d = new Date(2021, 8 , 26 , 10 , 15 , 50);
            document.getElementById("result7").innerHTML = d;
        }
        // Task 9 check its and leap year or not 
        function leapyear(){
            let getleap = document.getElementById("leap").value;
            let year = new Date(getleap).getFullYear();
            if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
                document.getElementById("result8").innerHTML = "It's a leap year";  
            }
            else{
                document.getElementById("result8").innerHTML = "It's not a leap year";
            }

        }
        // Task 10 display the current date and time
        function currentdateandtime(){
            let date = new Date();
            document.getElementById("result9").innerHTML = date;
        }

        // Task 11 compare the date  
        function compare(){
            let date11 = document.getElementById("date1").value;
            let date12 = document.getElementById("date2").value;
            let dat = new Date(date11);
            let date = new Date(date12);
            let oneday = (1000 * 60 * 60 * 24);
            let result = Math.abs((date.getTime()-dat.getTime() )/ oneday);

            document.getElementById("result10").innerHTML = "The days difference between the two dates: " + result;
        }

        // Task 12 Countdown timer
        function countdown(){
            let dateofcountdown = new Date("nov 25, 2022, 12:00:00").getTime( );
            let countlimit = setInterval(function(){
                let now = new Date().getTime();
                let distance = dateofcountdown - now;
                let days = Math.floor(distance / (1000 * 60 * 60 *24));
                let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                let minutes =  Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                let seconds = Math.floor(distance % (1000 * 60) / (1000));
                document.getElementById("result12").innerHTML = "<b>" + days + "days" + hours + "hours" + minutes + "m" + seconds + "s" + "</b>" 
                if(distance < 0){
                    clearInterval(countlimit);
                    document.getElementById("result12").innerHTML = "Expired";
                }
            })
        }
        countdown();

        //  Task 14 Random Number
        function randomnumber(){
            let ramu1 = Number(document.getElementById("num1").value);
            let ramu2 = Number(document.getElementById("num2").value);
            let rando = Math.floor(Math.random() * (ramu2 - ramu1 + 1) + ramu1);
            document.getElementById("result16").innerHTML = rando;

        }
        
        //  Task 15 Current URl
        function curl(){
            document.getElementById("result17").innerHTML = "URL" + window.location.href;
        }

        //  Task 16 Validate E-mail Address
        
        function email(){
            let mail = document.getElementById("emailid").value;
            let mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if( mail == "" || !mail.match(mailformat)){
                document.getElementById("emailid").style.border = "2px solid red";
                document.getElementById("result13").innerHTML = "Enter a valid email";
                document.getElementById("result13").style.color = "red";

            }
            else{
                document.getElementById("emailid").style.border = "2px solid lightgreen";
                document.getElementById("result13").innerHTML = "";
                
            }
        }

        // Task 19 float  |  integer 
        function floatinteger(){
            let flint = Number(document.getElementById("infloat").value);
                if(Number.isInteger(flint)){
                    document.getElementById("result23").innerHTML = flint + "It's a Integer Number";
            }
            else{
                document.getElementById("result23").innerHTML = flint + "It's a float Number";
            }
            }

        //  Task 20 image dimensation
        function ramkani(){
            let kaniram = document.getElementById("ram").width;
            let kaniramu = document.getElementById("ram").height;

            document.getElementById("result14").innerHTML = "The width of the image : " + kaniram + "px";
            document.getElementById("result15").innerHTML = "The height of the image : " + kaniramu + "px";;

        }
        //  Task 21 remove the all whitespace from a paragraph
        function clearwh(){
            let space = document.getElementById("whites").value;
            document.getElementById("result19").innerHTML = "Normal length"  + space.length;
            let trimming = space.trim();
            document.getElementById("result019").innerHTML = "trimming length" + trimming.length;
            let formatspace = space.replace(/\s+/g, "");
            document.getElementById("result0019").innerHTML = "formatspace removing" + formatspace.length;
        }

        //  Task 22 JavaScript Program to Convert Date to Number
        function daten(){
            let date = new Date();
            document.getElementById("result18").innerHTML = date;
            let number = new Date().getTime();
            document.getElementById("result018").innerHTML = number;
        }

        //  Task 23  Encode a string to Base64
        function encodestr(){
            let string = document.getElementById("encode").value;
            document.getElementById("result21").innerHTML = string;
            let encode64 = window.btoa(string);
            document.getElementById("result021").innerHTML = encode64;
        }

        //  Task 24 replace all line break with <br> tag

        function breakie(){
            var brlin = `lorem labore ea, justo dolor 
            lorem ipsum ut sed eos, ipsum
            et dolor kasd sit ea justo. 
            Erat justo sed sed diam. 
            Ea et erat ut sed diam sea
            ipsum est dolor.`;
           
            document.getElementById("result20").innerHTML = brlin;
            let breaking = brlin.split('\n').join('<br>');
            document.getElementById("result020").innerHTML = breaking;
        }
        
        //  Task 25 File Extension 
        function fileextension(){
            let files = document.getElementById("fileext").value;
            let Extension = files.split(".").pop();
            document.getElementById("result22").innerHTML = 'The Extension file is :' + "  " + Extension;
        }

        
       
        // the task 18! , 19! , 26 is incomplete

        // prime number 

     {
   function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
             i = 3;
             value += 2;
             q = Math.floor(Math.sqrt(value));
             while (i <= q && value % i) {
                 i += 2;
             }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}


var value, result = [];
for (var i = 0; i < 10; i++) {
    value = nextPrime(value);
    result.push(value);
}
//console.log("Primes:", result);


document.getElementById("dem").innerHTML = "Primes:"+ result;

     }

     function hiBab() {
        //  var namee = " Hey kanimozhi ";
        document.getElementById("love").innerHTML = "hy bab";
     }
   

      myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo1").innerHTML =
  typeof carName + " " + carName;
}

// document.getElementById("demo2").innerHTML =
// typeof carName;

function myFunction() {
  document.getElementById("memi").innerHTML = "Paragraph changed.";
}