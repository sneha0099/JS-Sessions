// 9) Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms.

const wait = ((ms)=>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("2 secs passed");
        
    },ms)
})
})


wait(2000).then(() => {
  console.log("2 seconds passed");
});