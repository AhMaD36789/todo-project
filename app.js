'use strict';
let Name = prompt("Please enter your name","Enter name here");
let Gender = prompt("Please enter your Gender");
let age = prompt("Please enter your age",)
if (age<=0){
    alert("Your age cant be less that or equal zero.")
    prompt("Please enter your age",)
}
if(Gender == "male" || Gender == "Male"){
    Gender ="Mr. ";
}else if(Gender == "female" || Gender == "female"){
    Gender ="Mrs. ";
}
else gender ="";

var confirmation = confirm("Press cancel to skip welcoming message")
if (confirmation == true){
    alert("hello " + Gender + Name )
}