// JS: Chunk an Array

// Write a function chunkArray(arr, size) that:

// Splits an array into smaller arrays (chunks) of a given size

// Returns a new array containing these chunks

// Uses reduce

// Uses slice OR index-based logic

// Does not use loops (for, while)

// Example:

// Input: ([1, 2, 3, 4, 5], 2)
// Output: [[1, 2], [3, 4], [5]]

// Constraints:

// size will always be greater than 0

// Original array should not be mutated

// function chunkArray(arr,size){
//     return arr.reduce((ChunkedArray, _, index) => {
//         if(index%size===0){
//             ChunkedArray.push(arr.slice(index,index+size))
//             //ChunkedArray[index/2] = arr.slice(index,index+size)
//         }
//         return ChunkedArray;
//     },[])
// }

// const input = [1, 2, 3, 4, 5];
// const size = 2;
// console.log(chunkArray(input, size)); 

function chunkArray(arr,size){
    return arr.reduce((acc,curr,index)=>{
       if(index%size==0) {
        acc.push(arr.slice(index,index+size))
       }
       return acc
    },[])
    
}

const input = [1, 2, 3, 4, 5,6];
const size = 2;
console.log(chunkArray(input, size));

const posts = [ { title: 'JS Tips', tags: ['js', 'web'] }, 
                { title: 'HTML Pro', tags: ['html', 'web'] }, 
                { title: 'CSS Art', tags: ['css', 'design'] } ]

// function uniqueTags(posts){
//     return posts.reduce((acc,curr)=>{
//         if(!acc.includes(curr.tags[0])){
//             acc.push(curr.tags[0])
//         }
//         if(!acc.includes(curr.tags[1])){
//             acc.push(curr.tags[1])
//         }
//         return acc;
//     },[])
// }

// function uniqueTags(posts){
//     return posts.reduce((acc,curr)=>{
//         curr.tags.forEach((tag)=>{
//             if(!acc.includes(tag)){
//                 acc.push(tag);
//             }
//         })
//         return acc;
//     },[])
// }

// function uniqueTags(posts){
//     return posts.reduce((acc,curr)=>{
//         curr.tags.forEach((tag)=>{
//             if(!acc.includes(tag)){
//                 acc.push(tag);
//             }
//         })
//         return acc;
//     },[]).sort()
// }

// const ans = uniqueTags(posts);
// console.log(ans);

// function uniqueTags(posts){
//     return [...posts.reduce((acc,curr)=>{
//         curr.tags.forEach((tag)=>{
//             acc.add(tag)
//         })
//         return acc;
//     },new Set())].sort()
// }

function uniqueTags(posts){
    const finalSet = posts.reduce((acc,curr)=>{
        curr.tags.forEach((tag)=>{
            acc.add(tag)
        })
        return acc;
    },new Set())

    console.log(finalSet);
    return finalSet
    
}

const ans = uniqueTags(posts);
console.log(ans)

// const obj ={
//     name : "SMIT",
//     greet1(){
//         console.log("grret1 :"+this.name);
//     },
//     greet2 : ()=>{
//         console.log("grret2 :"+this.name);
//     },
//     greet3(){
//         setTimeout(()=>{
//             console.log("grret3 :"+this.name);
//         },2000);
//     },
//     greet4 : ()=>{
//         setTimeout(()=>{
//             console.log("grret4 :"+this.name);
//         },2000);
//     },
//     greet5(){
//         setTimeout(function(){
//             console.log("grret5 :"+this.name);
//         },2000);
//     },
//     greet6 : ()=>{
//         setTimeout(function (){
//             console.log("grret6 :"+this.name);
//         },2000);
//     },
//     greet7(){
//         let name = ()=>{
//             console.log("grret7 :"+this.name);
//         }
//         name();
//     },
//     greet8 : ()=>{
//         let name = function(){
//             console.log("grret8 :"+this.name);
//         }
//         name();
//     }
// }

