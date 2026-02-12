// 7) Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().

function tossCoin(){
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num>=0.5) {
            resolve("Heads")
        } else {
            reject("Tails")
        }
    })
}

tossCoin().then((res)=>
    console.log(res)
    
).catch((e)=>{
        console.log(e);
        
    })