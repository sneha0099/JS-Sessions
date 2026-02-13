const tasks = [
    () => fetchData(`https://dummyjson.com/users/1`),
    () =>fetchData(`https://dummyjson.com/users/1`),
    () =>fetchData(`https://dummyjson.com/users/1`),
]

async function runWithLimit(tasks, limit) {
    return new Promise((resolve, reject) => {
        const results = [];
        let runnig = 0;
        let completed = 0;
        let index = 0;

        function runNext(){


            if(completed == tasks.length){
                resolve(results);
                return;
            }
            while(runnig<limit && completed< tasks.length){
                let currentIndex = index;
                const task = tasks[index]

                index++;
                runnig++;

                task().then(result =>{
                    results[currentIndex] = result;
                    runnig--;
                    completed++;
                }).catch(reject)
            }


            runNext()
        }

    })
}