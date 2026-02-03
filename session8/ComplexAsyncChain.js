console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");

// My Prediction: 1 7 3 4 5 2 6 

// output: 1 7 3 4 5 2 6 

// Explanation: 
// 1 and 7 are synchronus so will get logged directly through call stack.
// setTimeOut of 2 will be added in macrotask queue.
// queueMicrotask of 3  will add it in microtask queue.
// promise of 4 will add it in microtaskqueue.
// setTimeout of 6 will add it in macrotask queue.
// now microtask queue has : two promises of 3 and 4
// and macrotask queue has : setTimeout of 2 and 6.
// microtask queue's tasks will be executed one by one
// will log 3 of queuemicrotask function then promise of 4 that will log 4 and it has another queueMicrotask inside it
// that will add 5 in microtask queue
// now microtask queue has : 5 
// macrotask queue : 2 6
// priority of microtask queue is more so it will log 5
// then macrotask's setTimeout will be executed as microtask queue is empty.
// it will log 2 then will log 6.