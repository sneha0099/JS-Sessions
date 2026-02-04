
// JS: Async Data Aggregation Using Promises
// You are required to fetch related data from multiple APIs and create a summary. Steps:
// Fetch a user
// Fetch posts for that user
// Fetch comments for one of the posts
// Combine the results into a single summary object
// Example:
// summary: {
// user: "Leanne Graham",
// postCount: 10,
// commentCount: 5
// }
// Contraints:
// Use Promise.all
// Use async/await
// Handle errors properly
// Return or log a summary object

async function DataAggregation() {

const user = fetch(`https://jsonplaceholder.typicode.com/users/1`).then(res => {         
        if (!res.ok) throw new Error("User fetch failed");
        return res.json()});

const posts = fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`).then((res)=>{
        if (!res.ok) throw new Error("User fetch failed");
        return res.json()});
const comments = fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`).then((res)=>{
        if (!res.ok) throw new Error("User fetch failed");
        return res.json()});

Promise.all([user,posts,comments])
    .then(([userResp,postsResp,commentsResp])=>{
        const summary = {
            user: userResp.name,
            postCount : postsResp.length,
            commentCount : commentsResp.length
        }
        console.log(summary);
        return summary
    })
    .catch(err => console.error(err));

}

//DataAggregation();

async function DataAggregations() {

  const userPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Leanne Graham" });
    }, 300);
  });

  const postsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: 1 },
        { id: 2, userId: 1 },
        { id: 3, userId: 1 }
      ]);
    }, 500);
  });

  const commentsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId: 1 },
        { id: 2, postId: 1 },
        { id: 3, postId: 1 },
        { id: 4, postId: 1 },
        { id: 5, postId: 1 }
      ]);
    }, 200);
  });

  return Promise.all([userPromise, postsPromise, commentsPromise])
    .then(([user, posts, comments]) => {
      const summary = {
        user: user.name,
        postCount: posts.length,
        commentCount: comments.length
      };

      console.log(summary);
      return summary;
    })
    .catch(err => {
      console.error("Error:", err);
      throw err;
    });
}



// async function getSummary() {
//   try {
//     const userId = 1;
//     const postId = 1; 

//     const [user, posts, comments] = await Promise.all([
//         fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(res => {
//           if (!res.ok) throw new Error("User fetch failed");
//           return res.json();
//         }),

//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then(res => {
//           if (!res.ok) throw new Error("Posts fetch failed");
//           return res.json();
//         }),

//         fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
//         .then(res => {
//         if (!res.ok) throw new Error("Comments fetch failed");
//         return res.json();
//         })

//     ]);

//     const summary = {
//       user: user.name,
//       postCount: posts.length,
//       commentCount: comments.length
//     };

//     console.log(summary);
//     return summary;

//   } catch (error) {
//     console.error("Error creating summary:", error.message);
//     throw error;
//   }
// }

// getSummary();
