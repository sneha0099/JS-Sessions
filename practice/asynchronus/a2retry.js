// 🔥 3️⃣ Retry Mechanism with Backoff
// Problem:

// Implement:

// retry(fn, retries, delay)


// Behavior:

// Calls async function fn

// If it fails, retry after delay ms

// Retry at most retries times

// Throw final error if still failing

// function retry(fn, retries, delay){
//     if(retries>0){
//         for (let retry = 0; retry < retries; retry++) {
//             setTimeout(()=>{
//                 fn();
//             },delay)
//         }
//     }
// }

async function fetchData(url) {
    const res = await fetch(url);
    if(!res.ok){
        console.error("result is not ok")
    }

    const data = await res.json()

    return data;
}

function wait(ms){
    return new Promise((resolve => setTimeout(resolve,ms)))
}

async function retry(fn,retries,delay) {
    let lastError;
    for(let attempt = 0; attempt<=retries; attempt++){
        try {
            return await fn();
        } catch (error) {
            lastError = error

            if(retries == attempt){
                throw new Error("Out of retries")
            }
            console.log(`trying ${attempt}`);
            
            await wait(delay)
        }
    }

}


retry(() => fetchData('https://jsonplaceholdertypicode.com/users'),10,200)