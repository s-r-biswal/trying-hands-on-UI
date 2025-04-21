var x =5;
var  y =10;

function add(a, b){
return a+b;
}

var answer = add(3, 5);
var z = x+y;

console.log(z);
console.log(answer);

// functional execution context
// Global Execution contect
//variables are partially hoised
//functions are filly hoisted

add(5,10)

var add = function (a, b) {
    console.log(a+b);
}


// Host Objects

Browser, Window, Local staorage , DocumentTimeline

// Native Object
Date, JSON