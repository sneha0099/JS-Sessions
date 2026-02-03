// roblem 4: User → Posts

// Scenario:
// First fetch a user, then fetch posts of that user.

// Task:

// Fetch user with id 1

// Fetch posts using userId

// Return user name + number of posts

// APIs:

// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1


// Concept tested:
// Dependent await calls

async function getUserPostStats(userId) {
  try {
    // 1️⃣ Fetch user
    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!userRes.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await userRes.json();

    // 2️⃣ Fetch posts using userId (DEPENDENT CALL)
    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

    if (!postRes.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await postRes.json();

    // 3️⃣ Return required result
    return {
      userName: user.name,
      postCount: posts.length,
    };
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

// Consume
getUserPostStats(1)
  .then((result) => console.log(result))
  .catch(() => console.log("Something went wrong"));
