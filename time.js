"use strict";
//7-1
runClock();
setInterval("runClock()",1000);


//2. window onload / anonymous function 
function runClock (){
//7. display date

var currentDay = new Date();
var date = currentDay.toLocaleDateString();
var time = currentDay.toLocaleTimeString();
//display current time
document.getElementById("header_title").innerHTML = document.title +"<br/>" + date + "<br/>" + time;
};