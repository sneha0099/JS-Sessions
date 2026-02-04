/*
## Task 2: setTimeout Examples


### Objective
Complete and understand various setTimeout scenarios.


### Exercise 1: Basic setTimeout


**Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

*/

// TODO: Implement countWithDelay function

// function countWithDelay(limit){

function countWithDelay(limit){

    let counter = 1;
    const id = setInterval(()=>{

        console.log(`after`, counter, `second${counter==1?``:`s`}`);
        counter++;
    
        if(counter>limit){
            clearInterval(id);
        }
    },1000)
}

countWithDelay(5);

// output:
// after 1 second
// after 2 seconds
// after 3 seconds
// after 4 seconds
// after 5 seconds
