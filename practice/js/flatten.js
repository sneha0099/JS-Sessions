// 🟦 JS Question 1: Deep Flatten Object
// JS: Deep Object Flattening

// Write a function flattenObject(obj) that:

// Flattens a deeply nested object

// Uses dot notation for nested keys

// Returns a new object

// Does not mutate original object

// Handles arrays correctly

// {
//   user: {
//     name: "John",
//     address: {
//       city: "NY",
//       zip: 10001
//     }
//   }
// }

// {
//   "user.name": "John",
//   "user.address.city": "NY",
//   "user.address.zip": 10001
// }

// Constraints:

// Must use recursion

// No external libraries

// Original object must remain unchanged

let objAns = {};

function flatten(obj, parentkey="", result={}){
    let path = parentkey;
    for(let key in obj){
        console.log(key);
        
        if(!obj.hasOwnProperty(key)) continue;

        const newKey = parentkey ? `${parentkey}.${key}` : key;
        const value = obj[key];

        if(typeof obj[key]==="object"){
            console.log(obj[key]);
            
            flatten(value, newKey, result);
        }else{
            if(Array.isArray(obj[key])){
                value.forEach((val,index)=>{
                    const arrayKey = `${newKey}.${index}`
                    if(typeof val !== "object"){
                        let newPath = `path.${val}`
                        flatten(val,arrayKey,result);
                    }else{
                        result[arrayKey] = val
                    }
                })
            }else{
                result[newKey] = value
            }
        }
    }

    return result;
}

const u = {  
    user: {
    name: "John",
    address: {
      city: "NY",
      zip: 10001
    }
  }
}

console.log(flatten(u,"",{}), "joo")