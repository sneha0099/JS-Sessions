// reduce

const users = [
    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'smith', age: 26},
    {firstName: 'Bob', lastName: 'Doe', age: 35},
    {firstName: 'Alice', lastName: 'spring', age: 26}
]

const fullnames = users.map((user)=> user.firstName + " " + user.lastName)
console.log(fullnames)

// using reduce to find the frequency of ages
freqOfAges = users.reduce((acc, user) => {
    if (acc[user.age]) {
        acc[user.age] += 1
    } else {
        acc[user.age] = 1
    }
    return acc
}, {})

console.log(freqOfAges) 


// using reduce to find the first name of users who are less than 30
firstNameswhoseageislessThan30 = users.reduce((acc, user) => {
    if (user.age < 30) {
        acc.push(user.firstName)
    }
    return acc
}, [])

console.log(firstNameswhoseageislessThan30)

// using filter to find the names of users who are less than 30
names = users.filter((user) => user.age<30).map((user) => user.firstName)
console.log(names)

const posts = [
    { title: "React Basics", category: "Frontend" },
    { title: "Node Streams", category: "Backend" },
    { title: "Async/Await", category: "JS" },
    { title: "CSS Grid", category: "Frontend" },
    { title: "Express Middleware", category: "Backend" }
  ];

const categorizedPosts = posts.reduce((acc, post) => {
    if (acc[post.category]) {
        acc[post.category].push(post.title)
    } else {
        acc[post.category] = [post.title]
    }
    return acc 
}, {})

console.log(categorizedPosts)

const freqOfCategories = posts.reduce((post, curr)=>{
if(post[curr.category]){
post[curr.category] += 1;
}
else{
post[curr.category] = 1;
}
return post;
}, {})
console.log(freqOfCategories,"freqOfCategories")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sumofEvenNumbers = numbers.reduce((acc, num) => {
//     if (num % 2 === 0) {
//         acc += num
//     }
//     return acc
// }, 0)

sumOfEvenNumbers = numbers.reduce((acc, curr)=>{
if(curr%2!==0){
 acc += curr;
}
return acc;
}, 0)

console.log(sumOfEvenNumbers)

// 