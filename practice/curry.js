function sum(a,b,c){
    return a+b+c;
}

function curry(fn){
    const arity = fn.length;

    if(arity>=arguments.length){
        
    }
}

const curriedSum = curry(sum);

const op = curriedSum(1,2)(3);

console.log(op);
