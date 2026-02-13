// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 3, y: 7 });

interface Coord {
  x: number;
  y: number;
}

function printCoord({ x, y }: Coord) {
  console.log("The coordinate's x value is " + x);
  console.log("The coordinate's y value is " + y);
}

//printCoord({ x: 3, y: 7 });

function printCoor(pt: Coord) {
  console.log("The coordinate's x value iis " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoor({ x: 3, y: 7 });

// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.
// }

// solution -> type narrowing
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

printId("fsdfsdf")

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree([0,1,2,3,4]))

console.log(getFirstThree("lksadfj"))

// What is a Literal Type?

// Normally:

let statuss: string = "success";


//status can be ANY string.

//But with literal types:

let stats: "success" = "success";


//Now:

stats = "error"; // ❌ not allowed
//Type '"error"' is not assignable to type '"success"'.ts(2322)
