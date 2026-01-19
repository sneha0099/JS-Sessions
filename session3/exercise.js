// Exercise 1: The URL Slug Builder
// Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).
// Input: "JavaScript For Beginners"
// Task:
// Convert the string to lowercase.
// Split the string into words.
// Join the words back together using hyphens (-).
// Expected Output: "javascript-for-beginners"

const title = "JavaScript For Beginners";

const slug = title.toLowerCase().split(" ").join("-");
console.log(slug);

// Exercise 2: Pagination Logic
// Scenario: You have a list of 10 items. You need to simulate "Page 2" of a table, displaying only items 4, 5, and 6.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Task: Use .slice() to extract the items at indices 3, 4, and 5.
// Expected Output: [4, 5, 6]

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page2 = items.slice(3,6);
console.log(page2);

// Exercise 3: The Price Formatter
// Scenario: You have a list of raw number prices. You need to format them for the UI.
// Input: [10, 20, 30]
// Task: Use .map() to add a "$" sign to the front of every number.
// Expected Output: ["$10", "$20", "$30"]

const rawPrices = [10, 20, 30];
const Prices = rawPrices.map((price)=> `$${price}`);
console.log(Prices);

// Exercise 4: The Clean-Up Crew
// Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).
// Input: [25, -5, 18, 0, 40]
// Task: Use .filter() to keep only valid ages (positive numbers > 0).
// Expected Output: [25, 18, 40]

const ages = [25, -5, 18, 0, 40];
const validAges = ages.filter((age) => age > 0);
console.log(validAges);

// Exercise 5: The "One-Liner" Chain
// Scenario: Combine both methods.
// Input: [-10, 20, 50, -5]
// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).
// Expected Output: [40, 100]

const numbers = [-10, 20, 50, -5];
// const remainingNumbers = numbers.filter((num) => num > 0);
// const doubledNumbers = remainingNumbers.map((num) => num * 2);
// console.log(doubledNumbers);

const result = numbers
  .filter((num) => num > 0)
  .map((num) => num * 2);

console.log(result);

// Exercise 6: The Shopping Cart
// Scenario: Calculate the total cost of the items in a cart.
// Input: [100, 200, 50]
// Task: Use .reduce() to sum the values starting from 0.
// Expected Output: 350

const input = [100, 200, 50];

const total = input.reduce((acc, num)=>{
    return acc + num;
}, 0);
console.log(total);

// Exercise 7: The "this" Detective
// Scenario: The code below is broken (it logs undefined).
// Explain why it fails.
// Fix it so it logs "Hello, Alex".
// JavaScript
// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();


// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();
// // Expected Output: "Hello, Alex"

// // Fix using regular function
// function greet() {
//     console.log("Hello, " + this.name);
// }
// // user.greet = greet;
// user.greet();


const user = {
  name: "Alex",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // Hello, Alex

// Exercise 8: The Safe Update
// Scenario: You need to update a user's theme setting without mutating the original object.
// Input:
// JavaScript
// const settings = { theme: "light", notifications: true };


// Task:
// Create a new variable newSettings.
// Use the Spread Operator (...) to copy the properties from settings.
// Overwrite the theme to "dark" inside the new object.
// Verify settings.theme is still "light" (Immutable Check).

const settings = {
    theme: "light",
    notifications: true
}

const newSettings = {...settings, theme: "dark"};

console.log(settings)
console.log(newSettings);

// Exercise 9
// Combine everything you learned into one function.
// Scenario: You have an inventory list.
// Filter out items that are out of stock (stock: 0).
// Map the remaining items to calculate their total value (price * stock).
// Reduce to find the total value of the entire inventory.
// Data:
// JavaScript
// const inventory = [
//     { name: "Laptop", price: 1000, stock: 5 },
//     { name: "Phone", price: 500, stock: 0 },
//     { name: "Mouse", price: 50, stock: 10 }
// ];
// Expected Output: 5500

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const value = inventory.filter(item => item.stock > 0)
                       .map(item => item.price * item.stock)
                       .reduce((acc, curr) => acc + curr, 0);

console.log(value); 