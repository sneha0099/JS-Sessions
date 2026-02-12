// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union
var order1 = {
    userId: 1,
    name: "sneha",
    productId: 11,
    price: 20,
    orderId: 34443,
    quantity: 30
};
console.log(order1);
var order2 = {
    userId: 1,
    name: "Sneha",
    productId: 101,
    price: 500,
    orderId: 9001,
    quantity: 2
};
console.log(order2);
