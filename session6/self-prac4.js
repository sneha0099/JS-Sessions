// 🟠 LEVEL 3 — PARALLEL ASYNC CALLS (Promise.all)
// Problem 6: Fetch multiple users in parallel

// Scenario:
// Fetch 3 users at the same time.

// Task:

// Fetch users 1, 2, 3 in parallel

// Return array of user names

// APIs:

// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/users/2
// https://jsonplaceholder.typicode.com/users/3


// Concept tested:
// Promise.all + await

async function fetchUserNames() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/users/1",
      "https://jsonplaceholder.typicode.com/users/2",
      "https://jsonplaceholder.typicode.com/users/3",
    ];

    // Fetch all users in parallel
    const responses = await Promise.all(
      urls.map((url) => fetch(url))
    );

    // Check all responses
    responses.forEach((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch one of the users");
      }
    });

    // Convert all responses to JSON in parallel
    const users = await Promise.all(
      responses.map((res) => res.json())
    );

    // Extract names
    return users.map((user) => user.name);
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

// // Consume
// fetchUserNames()
//   .then((names) => console.log(names))
//   .catch(() => console.log("Something went wrong"));


//   async function fetchUsersByIds(ids) {
//   const users = await Promise.all(
//     ids.map((id) =>
//       fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((res) => {
//           if (!res.ok) throw new Error("Failed");
//           return res.json();
//         })
//     )
//   );

//   return users.map((u) => u.name);
// }

// fetchUsersByIds([1, 2, 3]).then(console.log);

