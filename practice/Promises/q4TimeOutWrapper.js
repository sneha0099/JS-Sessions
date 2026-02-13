// 🔥 5️⃣ Timeout Wrapper
// Problem:

// Implement:

// withTimeout(promise, ms)


// Behavior:

// If promise resolves within time → return result

// If it takes longer than ms → reject with timeout error

// Tests:

// Promise.race

// Clean cancellation thinking

function withTimeout(promise,ms){
    const timeOutp = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Timeout"))
        },ms)
    })
    return Promise.race([promise, timeOutp])
}
let promise1 = Promise.resolve('d1')
let promise2 = setTimeout(()=>{
    Promise.resolve('d2')
},500)
withTimeout(promise2,0).then(x=>console.log(x)).catch(x=>console.error(x))

// function solve(){
//     let promise1 = Promise.resolve('d1')
//     let promise2 = Promise.resolve('d2')
//     let promise3 = Promise.reject('d1')

//     [promise1,promise2,promise3].race((p)=>withTimeout(p,1000)).then(x=>console.log(x)
//     )
    
// }

// let promise = Promise.resolve('dd1')
// solve(promise)

// // solve()

// 🔥 7️⃣ Parallel API Aggregator
// Problem:

// You are given:

// async function getUser(id)
// async function getPosts(id)
// async function getComments(id)


// Implement:

// getUserProfile(id)


// It should:

// Fetch all 3 in parallel

// Return combined object

// Fail gracefully if one fails

// Tests:

// Promise.all

// Partial failure handling

// Performance thinking

// 🔥 8️⃣ Cancelable Promise Wrapper

// Implement:

// const { promise, cancel } = makeCancelable(fetchData());


// Behavior:

// If cancel is called → ignore resolution

// Prevent memory leaks

// Tests:

// State management

// Promise wrapping

// Real-world async control

// 🔥 9️⃣ Async Queue System

// Build a simple async job queue:

// Add jobs

// Process sequentially

// Continue even if one fails

// Tests:

// Async state handling

// Queue logic

// 🔥 10️⃣ Rate Limiter (Token Bucket Style)

// Implement:

// Only allow X calls per Y seconds

// Queue extra calls

// Real-world backend style problem.