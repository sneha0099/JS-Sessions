function calculateSum(...prices){
    //return prices.reduce((sum,p)=> sum+p, 0);
    return prices.reduce((acc,curr)=>{
        acc += curr;
        return acc;
    },0)
}

const ans = calculateSum(3,4);
console.log(ans);

function one() {
  console.log(`hi1`)
  two();
  console.log(`by1`)
}

function two() {
    console.log(`hi2`)
  three();
  console.log(`by2`)
}

function three() {
  console.log("Hello");
}

one();
