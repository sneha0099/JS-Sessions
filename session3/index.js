const raw = "react-node";
// 1. String to Array (Explode)
const words = raw.split("-"); // ["react", "node"]
// 2. Array to String (Glue)
const slug = words.join("-"); // "react-node"

console.log(words);

const names = "Dhruvil Test ABCD XYZ";

console.log(names.split(" "));

const rawTags = "react,javascript,frontend,css";

// Step 1: Split into an array
const tagList = rawTags.split(",");

const numbers = [2, 5, 8];

// "Take every number (n) and return n * 10"
const multiplied = numbers.map((n) => n * 10);

console.log(multiplied);

const scores = [2, 5, 8, 10];

// "Is the score > 5? Yes or No?"
const highScores = scores.filter((score) => score > 5);

console.log(highScores);

const products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Phone", stock: 0 }, // Out of stock
  { id: 3, name: "Mouse", stock: 10 },
];

const result = products
  .filter((p) => p.stock > 0)
  .map((p) => `${p.name} is available`);

console.log(result);

const totalSum = scores.reduce((acc, total) => {
  total = total + acc;

  return total;
}, 0);

console.log(totalSum);

const votes = ["Yes", "No", "Yes", "Maybe", "Yes"];

// {
//     "Yes": 3,
//      "No": 1,
//      "Maybe": 1
// }

const count = votes.reduce(
  (acc, vote) => {
    // If we have seen this vote before, add 1. If not, start at 1.
    if (acc[vote]) {
      acc[vote] += 1;
    }
    return acc;
  },
  {
    Yes: 0,
    No: 0,
  }
);

const product = {
  name: "Laptop",
  price: 200,
};

const car = {
  brand: "Tesla",
  start: function () {
    // 'this' points to 'car' because we call car.start()
    console.log("Starting " + this.brand);
  },
  stop() {
    console.log("Stopping " + this.brand);
  },
};

car.start();
car.stop();

const x = car.start();
console.log(x);

const user1 = { name: "John" };
const user2 = { ...user1, name: "Doe" };

console.log(user2.name, user1.name);

// The Task:
// Create a user object with name, email, and settings: { theme: 'light' }.
// Create a method inside it called printInfo that logs "User [name] uses [theme] theme" using this.
// Create a copy of the user (called updatedUser) using the spread operator.
// Change the updatedUser's name to "Admin".
// Verify that the original user is unchanged.

const user = {
  name: "Sneha",
  email: "Sneha@gmail.com",
  settings: {
    theme: "light",
  },
  printInfo: function () {
    console.log(`User ${this.name} uses ${this.settings.theme} theme`);
  },
};

const updatedUser = { ...user, name: "Admin" };

user.printInfo();
updatedUser.printInfo();

// var a = 10;
// x();
// y();
// // z();

// function x() {
//   var a = 20;
//   console.log(this.a);
// }
// function y() {
//   console.log(this.a);
// }
// const z = () => {
//   console.log(this.a);
// };
