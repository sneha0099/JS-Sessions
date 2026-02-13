// 🟡 Task 6 — Retry Mechanism
// Create a function:
// async function fetchWithRetry(retries: number)
// If API fails:
// •	Retry until retries = 0
// •	If still fails, throw error
// Goal: Real-world production pattern.
// ________________________________________


async function fetchData(url) {
    const res = await fetch(url);
    if(!res.ok){
        console.error("result is not ok")
    }

    const data = await res.json()

    return data;
}

async function fetchWithRetries(retries){
    try {
        return await fetchData('https://jsonplaceholder.typicode.com/users/1');
    } catch (error) {
        retries--;
        if(retries==0){
            throw new Error("out of retries")
        }

        console.log("Retrying... attempts left:", retries);

        return fetchWithRetries(retries);
    }
    
}

fetchWithRetries(10).then(x=>console.log(x)).catch((e)=>console.log(e))