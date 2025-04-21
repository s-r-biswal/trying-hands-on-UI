var x = 5;
var y =6

console.log(x+y)
console.log(Window.x)

console.log(this)

// Anything added to global scope by default added to Window object.
// this -> window object
//for Global Execution context this will be a window object


let user = {
    name : "Alice",

    greet() {
        console.log("Hello");
        console.log('Hello from $(this.name)')
    }
}


let cap = {
    firstName: "steve",
    sayHi: function(){
        console.log()
    }
}

cap.sayHi();
var sayHifn = cap.sayHi();
sayHi();

//O/p : hi from steve, hi from undefined.
//window.


//For Execution context created with method calls 
//this key word is always dependent on how the function is being called 
