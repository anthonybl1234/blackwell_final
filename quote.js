"use strict";

document.getElementById("quote").addEventListener("submit",addString);

function addString(){
var display = document.getElementById("formComplete");
var par = document.createElement("H3");
var text = document.createTextNode("anything");
par.appendChild(text);
display.appendChild(par);
}

 var myString = () => {    
    var firstName = form.elements.fname;
    var bestday = form.elements.weekday;
    var dayOf;
    for(var i = 0;i<bestday.length;i++){
        if(bestday[i].checked===tru){
            dayOf = bestday[i].value;
        }
    }
    // var returnString = "Thank you" + firstName + " we will contact you on" + 
    // dayOf;
    var returnString = "testing";
    return returnString;
 }       






 