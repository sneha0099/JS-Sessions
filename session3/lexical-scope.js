// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }

// outer();


function inner() {
  console.log(x);
}

function outer() {
  let x = 10;
  inner();
}

outer();
