const tasks = [
    () => fetchData(`https://dummyjson.com/users/1`),
    () =>fetchData(`https://dummyjson.com/users/1`),
    () =>fetchData(`https://dummyjson.com/users/1`),
]

async function fetchData(url) {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error("not ok")
    }

    const data = await res.json()

    return data;
}

async function runSequentially(tasks){
    const res = [];

    for(let task of tasks){
        const val =  await task();
        res.push(val);
    }

    return res;
}

// const value = runSequentially(tasks); 
// value.then(x => console.log(x))

async function runInParallel(tasks) {
    return Promise.allSettled(
        tasks.map(task=>task())
    )
}

runInParallel(tasks).then(x=>console.log(x))

// 🔥 1️⃣ Run Tasks Sequentially
// Problem:

// You’re given:

// const tasks = [
//   () => fetchUser(),
//   () => fetchOrders(),
//   () => fetchPayments()
// ];


// Implement:

// async function runSequentially(tasks)


// Requirements:

// Execute one task at a time

// Wait for previous to finish

// Stop execution if any task fails

// Return array of results

// 🔥 2️⃣ Run Tasks in Parallel

// Same input as above.

// Implement:

// async function runInParallel(tasks)


// Requirements:

// Run all at same time

// Return results in correct order

// Fail if any one fails

// 🔥 3️⃣ Concurrency Limiter (Important OA Question)
// Problem:

// Given 100 async tasks:

// const tasks = [ ... ];


// Implement:

// async function runWithLimit(tasks, limit)


// Requirements:

// Only limit tasks run at same time

// When one finishes, start next

// Preserve order

// Return final results

// This one separates strong devs from average.

// 🔥 4️⃣ Retry with Delay

// Implement:

// async function retry(fn, retries, delay)


// Behavior:

// Call async function fn

// If it fails, retry

// Wait delay ms before retry

// Stop after retries

// Throw final error if still failing

// Bonus:

// Exponential backoff

// 🔥 5️⃣ Timeout Wrapper

// Implement:

// async function withTimeout(promise, ms)


// Requirements:

// If promise resolves before ms → return result

// If not → throw timeout error

// 🔥 6️⃣ Rate Limiter

// Implement:

// const limitedFetch = rateLimit(fetchFn, maxCalls, perMs)


// Behavior:

// Only allow maxCalls within perMs

// Queue extra calls

// Resolve them when allowed

// Real backend-type problem.

// 🔥 7️⃣ Async Queue Processor

// Build:

// class AsyncQueue


// Features:

// add(task)

// process tasks one by one

// continue even if one fails

// 🔥 8️⃣ Cancelable Promise Wrapper

// Implement:

// const { promise, cancel } = makeCancelable(fetchData());


// If cancel is called:

// Ignore resolution

// Prevent memory leaks

// 🔥 9️⃣ Batch Processing

// Given 1000 items:

// const items = [...]


// Process in batches of 10:

// async function processInBatches(items, batchSize)


// Each batch runs in parallel.
// Next batch waits for previous.

// 🔥 1️⃣0️⃣ API Aggregator

// Given:

// async function getUser(id)
// async function getPosts(id)
// async function getComments(id)


// Implement:

// async function getFullProfile(id)


// Requirements:

// Fetch all in parallel

// Return combined object

// Handle partial failure gracefully

// ⚔ Hard Mode Questions

// If you want real difficulty:

// Implement Promise.any

// Implement Promise.race

// Implement async memoization cache

// Build a mini task scheduler

// Now Your Move

// Pick one number.

// I’ll:

// Turn it into full OA format

// Add constraints

// Add edge cases

// Review your solution brutally 😈