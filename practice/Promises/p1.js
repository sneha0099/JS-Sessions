// const promise1 = Promise.reject('ER') 
// const promise2 = Promise.reject("ERROR") 
// const promise3 = Promise.resolve(1) 

// Promise.any([promise1,promise2,promise3]).then((res)=>{
//     console.log(res);  
// }).catch((e)=>{
//     console.log("errpr c c");
    
//     console.error(e)
// })

// closure

// function myOuterFunc(){
//     let name = "sneha this side";

//     return function myInnerFunc(){
//         console.log(name);
        
//     }
// }

// const closureOp = myOuterFunc();
// closureOp();

//bind, call, apply

const person = {
    name: "sneha",
    greet: function(){
        console.log(`HI, ${this.name}`);
    }
}

person.greet() // HI, sneha

const greetSneha = person.greet.bind(person)
greetSneha() // HI, sneha

const Alice = {
    name: "ALICE"
}

const greetAlice = person.greet.bind(Alice)
greetAlice() // HI, ALICE

const sima = {
    names: "SIMA"
}

const greetsima = person.greet.bind(sima)
greetsima() // HI, undefined

person.greet.call(Alice) // Directly calls with new object

// apply

// const per = {
//     name: "charlie"
// }

// function greet(){
//     console.log(`Hello ${this.name}`);
    
// }

// greet.apply(per)

const per = {
    name: "charlie"
}

function greet(city,country){
    console.log(`Hello ${this.name} from ${city}, ${country}`);
    
}

greet.apply(per,["New York","USA"])

//thisxx
// var name = "snehaa"
// const obj = {
//     name :"john",
//     greet1: function(){
//         console.log(this.name);
//     },
//     greet2:()=>{
//         console.log(this.name);
        
//     }

// }
// obj.greet1();
// obj.greet2();

// const name = "snehaa"
// const obj = {
//     name :"john",
//     greet1: function(){
//         console.log(this.name);
//     },
//     greet2:()=>{
//         console.log(this.name);
        
//     }

// }
// obj.greet1();
// obj.greet2();

    const name = "snehaa"
    const obj = {
        name :"john",
        greet1: function(){
            return this.name;
        },
        greet2:()=>{
            return this.name;
            
        }

    }
    console.log(obj.greet1());
    console.log(obj.greet2())

var statuss = "Offline";

const server2 = {
    statuss: "Online",
    getStatus: function() {
        return this.statuss;
    },

    getStatus2: () => {
        return this.statuss;
    }
};

console.log(server2.getStatus());
console.log(server2.getStatus2());

const names = ["Alice", "Bob", 42]; // This array has strings and a number

names.forEach((s) => {
  console.log(s.toUpperCase());  // Error: Property 'toUpperCase' does not exist on type 'string | number'
});


// To fix this:

// Use Type Narrowing: You can narrow the type of s to string before calling toUpperCase(), ensuring that the method is only called on strings.

// Example using typeof Type Guard:
//const names = ["Alice", "Bob", 42]; // Mixed types: string and number

names.forEach((s) => {
  if (typeof s === "string") {  // Narrowing to string type
    console.log(s.toUpperCase()); // Now this works, because s is a string
  }
});

