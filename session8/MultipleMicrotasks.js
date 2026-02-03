console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");

// My Prediction: A G B D E C F

// Output: A G B D E C F

// Explanation: A and G will be logged first as they are sycnhronus so will ge logged directly via callstack
// there is 2 promises that will go in the microtask queue
// and there is 1 setTimeout that will go in macrotask queue
// now call stask is empty so microtask s first promise will be executed
// that will log B and D because it is logs that will be logged via call stack and promise of C will go in microtask
// now there is two promises are in microtask Queue one is for E and another is for C
// both of them will be executed one by one
// now microtask queue is empty and now it will exeucte one setTimeout of the macrotask queue
// executes and log F


