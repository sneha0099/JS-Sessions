console.log(`Value of a before declaration is ${a}`);
var a;
console.log(`a after declaration is ${a}`);

a = 10;

console.log(`Value of a after declaration is ${a}`);


//console.log(`Value of b before declaration is ${b}`);
let b;
console.log(`b after declaration is ${b}`);

b = 20;

console.log(`Value of b after declaration is ${b}`);

greeting();
console.log(greeting);

function greeting(){
    console.log("Hello, World!");
}

var greet2 = function(){
    console.log("Hello, Worldd!");
}

greet2();

console.log(greet2);

//----------

console.log(s);
var s = 1;