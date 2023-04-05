'use strict';
let q1 = prompt("vibe check time :) are you excited?","Yes/No")
let q2 = prompt("did you excercise this week ?","Yes/No")
let q3 = prompt("after you leave my website would you consider visiting again ?","Yes/No")

function checkInvalid(x){
    if(x !="yes" || x!="yes" || x!="No" || x!="no"){
        x="invalid";
        return x;
        } else {
            return x;
        }
}

checkInvalid(q1);
checkInvalid(q2);
checkInvalid(q3);

function arraySum(x,y,z){
    var arr = [x,y,z];
    return arr;
}

let answers = new Array;
answers = arraySum(q1,q2,q3);

function printArray(x){
    for (let i = 0; i<x.length; i++){
        console.log(x[i]);
    }
}
printArray(answers);