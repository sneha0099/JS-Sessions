async function retry(url, count) {
    try {
        const res = await fetch(url);

        if(!res.ok){
            throw new Error("error while fetchig")
        }

        const jsonData = await res.json();
        return jsonData;
    } catch (error) {
        if(count>0){
            // count--;
            console.log(`trying ${count}`);
            
            await retry(url,count-1);
           
            
        }
        throw new Error("Out of retries")
    }
}

//const resp = retry(`https:jsonplaceholdertypicode.com/todos/1`,5);
// resp.then((res)=>{
//     console.log(res);
    
// }).catch((error)=>{
//     console.log(error.message);
    
// })


async function retry2(url, count){
    while(count>0){
        try {
            const res = await fetch(url);
    
            if(!res.ok){
                throw new Error("error while fetching")
            }
    
            const data = await res.json();
    
            return data;
        } catch (error) {
            count--;
            console.log(`retrying ${count}`);
            //console.error(error);
        }
        
    }
    throw new Error("Out of retries");
}

retry2("https://jsonplaceholdertypicode.com/todos/1", 5)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));
