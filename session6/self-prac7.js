// async function fetchData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const user = await res.json();
//         console.log(user);
        
//     } catch (error) {
//         console.error("failed");
//     }
// }

// fetchData();

// function getUser() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 name: "sneha",
//                 age: 20
//             })
//         },3000)
//     })
// }


// async function showUser(){
//     const user = await getUser();
//     console.log(user);   
// }

// showUser();

// const p1 = Promise.resolve("succeed 1");
// const p2 = Promise.resolve("failed")
// const p3 = Promise.resolve("succeed 2");

// Promise.all([p1,p2,p3])
//     .then(console.log)
//     .catch(console.log)

// const p1 = Promise.reject("succeed 1");
// const p2 = Promise.reject("failed")
// const p3 = Promise.reject("succeed 2");

// Promise.allSettled([p1,p2,p3])
//     .then(console.log)
//     .catch(console.log)

// const data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Done")
//     },1000)
// })

// data.then(
//     (dataresp)=>{
//         console.log(dataresp)
//     }
// )
// .catch((e)=>{
//     console.error(error);
// })

