async function execute(tasks){
    const res = []

    for(let task of tasks){
        const op = await task()
        res.push(op);
    }

    return res;
}

// 🟡 Task 3 — Sequential Async Calls
// Create 3 async functions:
// •	loginUser()
// •	getProfile()
// •	getPosts()
// Each should:
// •	Wait 1 second
// •	Log when finished
// Call them in order using async/await so output is:
// User logged in
// Profile fetched
// Posts fetched

// function loginUser(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("logged in");
//         }, 1000);
//     });
// }

function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve()},ms)
    })
}

async function loginUser(){
    await delay(1000)
    return "logging in"
}
async function getProfile(){
     await delay(1000)
    return "logging in"
}
async function getPosts(){
     await delay(1000)
    return "logging in"
}

// loginUser().then(r=>console.log(r))
// getProfile().then(r=>console.log(r))
// getPosts().then(r=>console.log(r))

async function main(){
    const user = await loginUser()
    const Profile = await loginUser()
    const getPosts = await loginUser()

    
  console.log("Returned values:");
  console.log(user);
  console.log(Profile);
  console.log(getPosts);
}

// main()

// 🟡 Task 4 — Parallel Execution (Promise.all)
// Create 3 async functions that return numbers after 1 second.
// Use:
// Promise.all()
// Print the result array.
// Goal: Understand parallel async execution.

// [()=>loginUser(),()=>getProfile(),()=>getPosts]

Promise.all([loginUser(),getProfile(),getPosts()])
.then(([loginres,profileres,postsres])=>{
    console.log(loginres);
    console.log(profileres);
    console.log(postsres);
    
    return {
        loginres,
        profileres,
        postsres
    }
    
}) 