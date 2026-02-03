console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4")

// My prediction - 1 4 3 2

// Actual Output - 1 4 3 2

// Explanation: console statements are sycnhronus so that will get logged directly via call stack
// Promise has high prority than setTimeout promise will go in microtask and setTimeout will go in macrotask.
// once call stack becomes empty it will check microtask to find whether it has task or not it will find promise and
// will execute it then it will again check microtask once both call stack and microtask queue is empty then 
// it will execute tasks of macrotask queue.


