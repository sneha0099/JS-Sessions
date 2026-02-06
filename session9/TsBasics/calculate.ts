const prices: number[] = [10,20,30,40,50];

function calculateTotal(prices:number[]): number{
    let total = 0;
    for(let El of prices){
        total += El;
    }
    return total;
}

console.log(calculateTotal(prices));  

// console.log("Hello from TypeScript!");

function myFunc(num1: number, num2: number): string | number{
    if(num1+num2>100){
        return "result is greater than 100"
    }
    return num1 + num2
}

console.log(myFunc(10 , 90))