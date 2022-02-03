 
var array1 = [ "Art meets Computer Science"];
 
textPos = 0 

 

async function typeFirst() {
    document.querySelector('.typing').innerHTML = array1[0].substring(0,textPos) // sliced word 

    if (textPos++ != array1[0].length){
        setTimeout(typeFirst, 200)
    }
    
 
}

 

function pg1(){

    var fName = document.getElementById("your-fname").value
    var lName = document.getElementById("your-lname").value
    var gender = document.getElementById("gender-select").value
    var age = document.getElementById("age-input").value
    const stringFirstName = (/[a-zA-Z]/).test(fName)
    const stringLastName = (/[a-zA-Z]/).test(lName)
   
    

    if(!gender){
        document.getElementById("txt-gender-input").innerText = "Invalid"
        console.log(gender)
    }
    else{
        document.getElementById("txt-gender-input").innerText = " "
        console.log(gender)
    }


    if( age > 100 || !age ){
        document.getElementById("txt-age-input").innerHTML= "Enter an age between 0 and 100."
    }
    else{
        document.getElementById("txt-age-input").innerHTML= ""

    }
    


    if (!stringFirstName){
        document.getElementById("txt-fname-input").innerHTML = "Invalid"
    }
    else{
        document.getElementById("txt-fname-input").innerHTML = ""
    }

    if (!stringLastName){
        document.getElementById("txt-lname-input").innerHTML = "Invalid"
    }
    else{
        document.getElementById("txt-lname-input").innerHTML = ""
    }

    if(stringFirstName && stringLastName && age && age < 100 && gender){
        window.location = "pg2_form.html"
    }
 
    }

  
function pg2(){

    var threeWords = document.getElementById("three-words").value
    var checkedOption1 = document.getElementById("yes-no") //Yes
    var checkedOption2 = document.getElementById("yes-no-second") //No
    const stringThreeWords = (/[a-zA-Z]/).test(threeWords)
    var numWords = 0;

    for(var i = 0; i < threeWords.length; i++){
             if(threeWords[i] == " "){
                 numWords++
                 
             }}
   

    numWords = (numWords+1).toString()

     if (!stringThreeWords || numWords < 4){
        document.getElementById("three-words-input").innerHTML = "Please provide three words" 
    }
    else{
        document.getElementById("three-words-input").innerHTML = ""
    }


    if ( !checkedOption1.checked && !checkedOption2.checked ){
        document.getElementById("choice-input").innerHTML = "Please choose an option"
    }else{
        document.getElementById("choice-input").innerHTML = ""
    }

    if((stringThreeWords && numWords == 4) && (checkedOption1.checked || checkedOption2.checked)){
        window.location = "pg3_form.html"
    }

    console.log("0")
    console.log(numWords)
    console.log(checkedOption1.checked)
    console.log(checkedOption2.checked)
    


    
}
 
function pg3(){
    var radio1Pg3 = document.getElementById("radio-1")
    var radio2Pg3 = document.getElementById("radio-2")
    var radio3Pg3 = document.getElementById("radio-3")
    var radio4Pg3 = document.getElementById("radio-4")

    if(!radio1Pg3.checked && !radio2Pg3.checked &&!radio3Pg3.checked && !radio4Pg3.checked ){
        document.getElementById("txt-statement-input").innerHTML = "Please choose an option"
    }
    else{
        document.getElementById("txt-statement-input").innerHTML = " "
    }

    if(radio1Pg3.checked || radio2Pg3.checked || radio3Pg3.checked || radio4Pg3.checked){
        window.location = "p4_form.html"
    }
}


typeFirst();


// How to Easily Create a Typewriter Effect with JavaScript, 
//written by Miguel Nunez,  Aug 20, 2021, 
// https://dev.to/codefoxx/how-to-create-a-typewriter-effect-with-javascript-31o8 
 
 




       