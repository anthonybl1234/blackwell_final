"use strict";





window.addEventListener("load", function () {
    document.getElementById("submitButton").onclick = runSubmit;
});

function runSubmit(){
    validateFirst();
    validateLast();
    validatePhone();
    validateEmail();
}

function validateFirst() {
var first = document.getElementById("fname");
var firstPattern = /^[a-z,A-Z]+$/;
if(first.validity.valueMissing){
    first.setCustomValidity("Please enter first name");
    // return false;
}
else if(firstPattern.test(first).value === false){
    first.setCustomValidity("please enter letters only");
    // return false;
}
else{
    first.setCustomValidity("");
    // return false;
}
}
function validateLast() {
    var last = document.getElementById("lname");
    var lastPattern = /^[a-z,A-Z]+$/;
    if(last.validity.valueMissing){
        last.setCustomValidity("Please enter last name");
        return false;
    }
    if(!lastPattern.test(last)){
        last.setCustomValidity("please enter letters only");
        return false;
    }
    else{
        last.setCustomValidity("");
        return false;    
    }
}
function validatePhone() {
    var phone = document.getElementById("phone");
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if(phone.validity.valueMissing){
        phone.setCustomValidity("Please enter your phone");
        return false;
    }else if(!phonePattern.test(phone)){
        phone.setCustomValidity("incorrect format use (xxx-xxx-xxxx)");
        return false;
    }else{
        phone.setCustomValidity("");
        return false;
    }

}
function validateEmail() {
    var email = document.getElementById("email");
    var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(email.validity.valueMissing){
        email.setCustomValidity("please enter your email");
        return false;
    }else if(!emailPattern.test(email)){
        email.setCustomValidity("incorrect format use (thisformat@gmail.com)");
        return false;
    }else{
        email.setCustomValidity("");
        return false;
    }
}