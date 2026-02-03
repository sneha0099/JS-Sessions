function deepcopy(obj){
    if(obj===null || typeof obj !== 'object'){
        return obj;
    }

    const copy = Array.isArray(obj)? [] : {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepcopy(obj[key])
        }
    }
    return copy;
}

const user = { name: "Bob", tags: ["admin", "dev"] };
const newUser = deepcopy(user);
console.log(newUser);
