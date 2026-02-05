// Flatten a Nested Array

// Problem: Write a function that flattens a nested array (an array containing arrays) into a single-level array.

// Example:

// flatten([1, [2, 3], [4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]

input = [1, [2, 3], [4, [5, 6]]]

Array.prototype.flatten = function (){
    const output = [];
    //const len = input.length;

    for(let item of this){
        if(typeof item!= "object"){
            //console.log(item)
            output.push(item);
        }else{
            //console.log('hi');
            
            let temp = item.flatten();
            //console.log(temp);
            
            for (const el of temp) {
                //console.log(el);
                
                output.push(el);
            }
        }
    }
    return output
}

function flattenn(input){
    const output = [];

    for(const item of input){
        if(typeof item !== "object"){
            output.push(item)
        }else{
            
            
            const temp = flattenn(item);
            console.log(temp);
            
            for(const el of temp){
                output.push(el);

            }
            console.log(output, "op");
        }
    }
    return output
}

const op = flattenn(input)
console.log(op);


//console.log(input.flatten());
