// 8) Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.

const myPromise = new Promise((resolve,reject)=>{
    resolve(5)
})

myPromise
    .then((res)=>res*2)
    .then((res)=>res+20)
    .then((finalRes) => {
    console.log(finalRes);  
  });