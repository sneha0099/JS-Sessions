// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers

let n = 10;

n = false
// error: Type 'boolean' is not assignable to type 'number'.ts

function add(num1: number, num2:number){
    return num1+num2;
}
let op = add(1, 2)
op = "d"

// Type 'string' is not assignable to type 'number'.ts(2322)
