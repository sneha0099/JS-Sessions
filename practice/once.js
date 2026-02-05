function once(fn) {
  // Your code here ...
  let counter = false;
  let res = null;
  let fun = function (...args) {
    if (!counter) {
      res = fn.apply(this, args);
      counter = true;
      return res;
    }
    else {
      return res
    }
  }
  return fun;
}

function add(a, b) {
  return a + b;
}
let myfunc = once(add)
console.log(myfunc(2, 3))
console.log(myfunc(2, 5))
module.exports = once;


// function once(fn) {
//     let executed = false;  // Track if the function has been executed
//     let result;            // To store the result of the first execution

//     return function(...args) {
//         // If the function has already been executed, return the cached result
//         if (executed) {
//             return result;
//         }

//         try {
//             // Execute the function with the provided arguments
//             result = fn.apply(this, args);
//             executed = true; // Mark as executed
//         } catch (error) {
//             // If the function throws an error, don't cache the error, handle it
//             throw error;
//         }

//         return result; // Return the result of the first execution
//     };
// }