//Q1. Simple Object Context 

const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

//Dell
//getBrand is called as a method of laptop, so this correctly refers to the laptop object.
//Therefore this.brand resolves to "Dell" and gets printed.

//Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

//1,3,2
// synchronus -> .log
// promise -> microtask queue
// 

//Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));


// Promise.reject() creates a rejected promise
// .then() runs only on resolve → skipped
// Control jumps directly to .catch()


//Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());

// online -> online is in the server object and also outside but server.getStatus points to the server.status because of this.
// if there was arrow function then it would have printed offline.

//Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

//20
// promise gets resolved with value 10 then it gets multiplied by 2 then it becomes 20 and gets logged in next then.

//Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

//undefined
// because when we do const print = user.printName; this print becomes standalone function and it doesnt have the contexft of this 
// so it gives undefined.


//Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Start, End, Promise, Timeout
// Start and End are synchronus so will go in call stack directly
// Promise will go in microtask which's priority is more compare to macrotask.
// then SetTimeout will go in the macrotask

// when the call stack becomes empty then it checks microtask and when microtask is empty then it will check macrotask
// and executes that.

//Q8. Arrow Function Pitfall
{
var group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};


group.getTitle();
}

// undefined, because arrow function checks in the global scope and there is not title if there is normal function then it would
// have print developers.

//Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

// 10 
// promise gets resolved with value 5 then becomes 10 in next promise then it gets logged.

//Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

// Recovered -> because promise gets rejected fail is error of promise that gets logged then it returns covered which gets
// printed in res in .then()

//Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// A E C D B -> console.log are synchronus will get logged directly through call stack then promise goes in micro task get logged
// settimeout from macrotask.

//Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

//101, undefined
// The call method explicitly binds this to the agent object, allowing the function to access agent.id.
// Passing null makes this default to the global window object, where id is not defined.

//Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));
// Caught: Error1
// when single promise gets rejected promise.all throws error so it will log Caught: Error 1

//Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

//undefined
//When the timer finishes, the engine executes those instructions in the Global Context because it has no memory of the player 
//object it came from.

//Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// Caught Error
// 10

// .then throws error which finds nearest catch which logs caught error and returns 10 that goes to .then as catch marked
// it as resolved because of return so in next .then it logs 10.

//Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// C A D B
//C and A print first because they are immediate ->synchronous tasks
//D prints next because await pauses the foo function and lets the rest of the main script finish
//B prints last because it was moved to the Microtask Queue, which only runs after all synchronous code is complete

//Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

//cleanup Done
// The return Modified? is ignored. The .then(res) still receives Done because .finally() is not allowed to change 
// the resolved value.

//Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;
// undefined 10
// console.log(a) prints undefined because var a is hoisted to the top of the scope
// Before the Promise can run the code continues executing synchronously updating the value of a from 5 to 10

//Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");
// End P1 P2 T1 T2
//Synchronous First: End prints immediately as the only synchronous code, while T1 goes to the Task Queue and the Promises go to the Microtask Queue.

//Microtask Priority: P1 and P2 print next because the Microtask Queue is processed completely before the engine even looks at the Task Queue.

//Task Order: T1 prints before T2 because T1 was registered during the first script pass, whereas T2 was only added to the queue later when P1 executed.

//Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

//Sarah

//print is defined as an arrow function property, it automatically binds this to the instance m at the moment the object is created.
// so it prints sarah.
