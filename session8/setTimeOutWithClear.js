/*
### Exercise 3: setTimeout with Clear


**Task:** Create a countdown timer that counts from 10 to 0, then stops.


```javascript
// TODO: Implement countdown function
function countdown(start) {
 // Your code here
 // Should log numbers from start to 0, with 1 second between each
 // Should stop at 0
}

countdown(10);
// Expected output:
// 10 (immediately)
// 9  (after 1 second)
// 8  (after 2 seconds)
// ...
// 0  (after 10 seconds)
```
*/

function countdown(start){
    let counter = start;
    const id = setInterval(()=>{
        console.log(counter, `${counter==start?`(immediately)`:`(after ${start-counter} second${start-counter==1?``:`s`})`}`)
        counter--;

        if(counter<0){
            clearInterval(id);
        }
    },1000)
}
countdown(10);