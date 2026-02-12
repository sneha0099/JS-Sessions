console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

// My prediction: 
// Start 
// End 
// Promise2 
// Timeout1 
// Promise1 
// Timeout2 

// Actual Output:
// Start 
// End 
// Promise2 
// Timeout1 
// Promise1 
// Timeout2 

// Explanation:
// Start and End are synchronus will get executed and logged directly
// setTimeout will go in macrotask and Promise will go in microtask
// Promise has high prority so will get executed first will log promise 2 then there is setTimeout in promise that will go
// in macrotask queue
// now microtask queue is empty so macrotask's setTimeout will get executed that will log timeout1 and promise will go in microtask queue
// now microtask has one promise in it and macrotaskqueue has 1 setTimeout in it
// microtask's priority is high so it will execute it first and will log promise1
// then microtask queue becomes empty and macrotask's setTimeout will get executed and will log Timeout2
