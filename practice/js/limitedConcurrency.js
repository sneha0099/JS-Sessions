const tasks = [
  () => fetchData(1),
  () => fetchData(2),
  () => fetchData(3),
  () => fetchData(1),
  () => fetchData(2),
  () => fetchData(3)];


async function fetchData(num) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num);
        },1000)
    })
}

function runWithLimit(tasks, limit){
    return new Promise((resolve,reject)=>{
            const results = [];
            let completed = 0;
            const lenthh = tasks.length;
            let running = 0;
            let index = 0;

            function runNext(){
                    if (completed === tasks.length) {
                        resolve(results);
                        return;
                    }
            while(running<limit && index<lenthh){

                let currIdx = index;
                let task = tasks[currIdx];

                running++;
                index++;

                task().then((res)=>{
                    results[currIdx] = res;
                    running--;
                    completed++;
                    runNext()
                })
                .catch(reject)
            }
            }

            runNext();

    })
}

// const op = runWithLimit(tasks,2)
// op.then(r=>console.log(r))

async function runWithLimits(tasks, limit){
    const res = new Array (tasks.length);
    let index = 0;

    async function worker() {
        while(index<tasks.length){
        const currentIndex = index++;
        res[currentIndex] = await tasks[currentIndex]();
        }
    }

    const workers = [];

    for(let i=0; i<limit; i++){
        workers.push(worker());
    }

    await Promise.all(workers)

    return res;
}

runWithLimits(tasks,2).then(x=>console.log(x))