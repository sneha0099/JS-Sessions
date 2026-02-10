// Problem 8: Convert Object Keys to Uppercase
// Objective
// Transform object keys without mutating the original object.
// Function
// convertKeysToUpperCase(obj)

// Requirements
// Convert only top-level keys


// Preserve values


// Return a new object


// Do not mutate original object


// Expected Outcome
// { name: "A", age: 30 } → { NAME: "A", AGE: 30 }

const initial = { name: "A", age: 30 } 

const convertKeysToUpperCase = (obj) => {
    const newobj = {}
    for (const key in obj) {
        const element = obj[key];
        const newKey = key.toUpperCase();

        newobj[newKey] = element
    }
    return newobj
}

const convertUppercase = (obj) => {
    const result = {}

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key.toUpperCase()] = obj[key]
        }
    }

    return result
}

const ans = convertKeysToUpperCase(initial)
const ans2 = convertUppercase(initial)

//console.log(ans);

console.log(ans2);




