// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).


function masterClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        // Return primitive values as they are (handles null and primitive types)
        return obj;
    }

    if (Array.isArray(obj)) {
        // Handle arrays by cloning each element
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = masterClone(obj[i]);
        }
        return arrCopy;
    }

    // Handle objects
    const objCopy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'function') {
                // If it's a function, do not copy it but share the reference
                objCopy[key] = obj[key];
            } else {
                // Recursively clone nested objects or arrays
                objCopy[key] = masterClone(obj[key]);
            }
        }
    }
    return objCopy;
} //explain this me in detail scrath what it does with flow and diagram 

const user = {
    name: "sneha",
    age: 21,
    fruits: ["apple", "banana"]
}

const user2 = masterClone(user);
// user2[0].fruits[0] = "grapes"

console.log(user);
console.log(user2);
