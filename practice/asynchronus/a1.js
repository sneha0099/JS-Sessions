console.log(111)
    await sum(2,3)
console.log(222)
function sum(a,b){
    console.log(a+b)
    Promise.resolve(6).then((data)=>{
        console.log(data);
    })
    setTimeout(()=>{
        console.log(9)
    },0)
}
function abc(){

    console.log(2)
}
abc()
console.log(1)
