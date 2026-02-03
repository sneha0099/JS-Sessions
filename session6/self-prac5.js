// Problem 7: Dashboard data

// Scenario:
// Build dashboard data using multiple APIs.

// Task:

// Fetch posts

// Fetch users

// Fetch comments

// Return combined object

// APIs:

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/comments

async function fetchDashboardData() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/comments",
    ];

    // Fetch all APIs in parallel
    const responses = await Promise.all(
      urls.map((url) => fetch(url))
    );

    // Validate all responses
    responses.forEach((res) => {
      if (!res.ok) {
        throw new Error("One of the dashboard APIs failed");
      }
    });

    // Convert all to JSON (parallel)
    const [posts, users, comments] = await Promise.all(
      responses.map((res) => res.json())
    );

    // Return combined dashboard object
    return {
      totalPosts: posts.length,
      totalUsers: users.length,
      totalComments: comments.length,
      posts,
      users,
      comments,
    };
  } catch (error) {
    console.error("Dashboard fetch error:", error.message);
    throw error;
  }
}

// // Consume
// fetchDashboardData()
//   .then((data) => console.log(data))
//   .catch(() => console.log("Failed to load dashboard"));


//   const fetchDashboardData = async () => {
//   const responses = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/posts"),
//     fetch("https://jsonplaceholder.typicode.com/users"),
//     fetch("https://jsonplaceholder.typicode.com/comments"),
//   ]);

//   const data = await Promise.all(responses.map(r => r.json()));

//   return {
//     posts: data[0],
//     users: data[1],
//     comments: data[2],
//   };
// };
