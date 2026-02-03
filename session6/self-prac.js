// fetch a user profile and print the user’s name and email.

async function fetchData(){
    try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    console.log(`data`, data);
    const jsonData = await data.json();
    console.log(`json data`, jsonData);
    return jsonData;        
    } catch (error) {
        console.log(error);
    }
}

fetchData().then((resp)=>{
    console.log(resp.name, resp.email);
})