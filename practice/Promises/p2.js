// const promise1 = Promise.resolve('ER') 
// const promise2 = Promise.reject("ERROR") 
// const promise3 = Promise.resolve(1) 

const promise1 = new Promise(reject => setTimeout(() => reject("ER"), 10000));
const promise2 = Promise.resolve("ERROR");
const promise3 = Promise.resolve(1);


// Promise.all([promise1,promise2,promise3]).then((res)=>{
//     console.log(res);  
// }).catch((e)=>{
//     console.log("errpr c c");
    
//     console.error(e)
// })
// 🔥 1️⃣ Implement Promise.all (From Scratch)
// Problem:

// Write your own version of Promise.all.

// myPromiseAll([p1, p2, p3])
//   .then(results => console.log(results))
//   .catch(err => console.log(err));


// Requirements:

// Resolve when ALL promises resolve

// Preserve order

// Reject immediately if any promise rejects

// This tests:

// Async coordination

// Edge cases

// Order tracking

// async function myPromiseAll([...promises]){
//     const res = [];

//     for(let p of promises){
//         try {
//             resolve(p).then((r)=>res.push(r))
//         } catch (error) {
//             console.error
//         }
//     }

//     return res;
// }

// myPromiseAll([promise1,promise2,promise3])
//     .then(res=>console.log(res))
//     .catch(e=>console.log(e))

function myPromiseAll(promises){
    //console.log(promises);
    
    return new Promise((resolve,reject)=>{
        const res = [];
        let completed = 0;

        //console.log(promises);
        //console.log(promises.length);
        

        if(promises.length==0){
            resolve([]);
            return;
        }

        promises.forEach((promise, index)=>{
            //console.log(promise);
            
            Promise.resolve(promise)
            .then((val)=>{
                res[index] = val
                completed++;

            if(completed == promises.length){
                resolve(res)
            }
        })
        .catch(reject)
        })

    })
}

myPromiseAll([promise1,promise2,promise3]).then(res=>console.log(res)).catch(e => console.log(e))