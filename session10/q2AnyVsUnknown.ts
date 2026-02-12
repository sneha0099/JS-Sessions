// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

function print(name: any){
    console.log(name.toUpperCase())
}

print(2)

function print2(name: unknown){
    if (typeof name === "string") {
        console.log(name.toUpperCase())
    }

}

print2("lala")

let data:any = "hello"

data.toUpperCase();

let data2:unknown = "heellooo"

data2.toUpperCase();

// conclusion: unknown forces us to write safer code.
// if forces to prove type before using it
// prevents runtime errors