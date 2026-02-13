async function fetchData(url) {
try {
    const res = await fetch(url)

    if(!res.ok){
        throw new Error("not ok")
    }

    const data = await res.json();

    return data;
} catch (error) {
    throw new error;
}
}

async function main() {
  try {
    const data = await fetchData(`https://jsonplaceholder.typicode.com/posts/1`);
    console.log("Success:", data);
  } catch (error) {
    console.log("Error handled:", error.message);
  }
}

main();
