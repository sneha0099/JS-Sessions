// 🟠 Task 7 — Timeout Wrapper
// Create:
// async function fetchWithTimeout(promise, timeout)
// If promise does not resolve within timeout:
// •	Reject with "Request Timeout"
// Hint: Use Promise.race()
// Goal: Advanced async control.

async function fetchWithTimeout(promise, time) {
    const timeoutPromisse = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("rejected")
        },time)
    })

    const res = await Promise.race([promise,timeoutPromisse])
    return res;
}

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved") 
    },5000)
})

fetchWithTimeout(promise,2000).then((x)=>console.log(x)).catch((e)=>console.log(e))