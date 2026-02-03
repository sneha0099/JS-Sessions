// // Fetch all posts and log total number of posts.

// Task:

// Fetch data

// Return post count

// Handle failed request

// API:

// https://jsonplaceholder.typicode.com/posts

async function fetchData(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!res.ok){
            throw new Error(`HTTP Error: ${res.status}`);
        }
        const posts = await res.json();
        return posts.length;
    } catch (error) {
        console.error("Error in fetching posts:", error);
        throw error;
    }
}

fetchData().then((res)=>{
    console.log(res);
})

// async function fetchPostCount() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error(`Failed to fetch posts: ${response.status}`);
//     }

//     const posts = await response.json();
//     return posts.length;
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     throw error;
//   }
// }

// fetchPostCount()
//   .then((count) => console.log("Total posts:", count))
//   .catch(() => console.log("Could not fetch posts"));
