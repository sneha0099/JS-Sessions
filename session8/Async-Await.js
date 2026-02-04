console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

// My Prediction: 
// Start 
// Async1
// End 
// Async2 
// Promise1 
// Timeout

// Output: 
// Start 
// Async1 
// End 
// Async2 
// Promise1 
// Timeout

// Explanation: 
// start will be logged first via callstack
// then there is definition of asyncFunction
// then it got called
// that will log Async 1 and then there is promise so it will wrap entire rest func in the promise
// and will send in microtask queue.
// there there is another promise of promise 1 that will go in microtask queue
// and then setTimeout that will go in the macrotask queue
// then there is END that will be logged directly
// now microtask queue: async2 promise1
// and macrotask queue: Timeout
// now microtask queue will be executed and it will log async2 and promise1
// then one microtask queue is empty it will execute setTimeout of the macrotask queue
// and it will log Timeout

