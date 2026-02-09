// 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(name);
            console.log(name,delay);
            
        },delay)
    })
}

async function sequencial(){
    await simulateTask("task1",1000)
    await simulateTask("task2",1000)
    await simulateTask("task3",1000)
}

async function promiseAll() {
    const p1 = simulateTask("task11",1000)
    const p2 = simulateTask("task22",1000)
    const p3 = simulateTask("task33",1000) 

    await Promise.all([p1,p2,p3])
        .then((res)=> console.log(res))
        .catch((e)=>console.log(e))
}

promiseAll()
sequencial()