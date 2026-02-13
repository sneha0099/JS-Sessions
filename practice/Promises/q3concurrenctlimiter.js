const tasks = [
  () => fetchData(1),
  () => fetchData(2),
  () => fetchData(3),
  () => fetchData(1),
  () => fetchData(2),
  () => fetchData(3)];

  function fetchData(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resolved:", num);
      resolve(num);
    }, 1000);
  });
}

function runWithLimit(tasks, limit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let running = 0;
    let index = 0;
    let completed = 0;

    function runNext() {
      // If all tasks completed → resolve
      if (completed === tasks.length) {
        resolve(results);
        return;
      }

      // Start tasks while under limit
      while (running < limit && index < tasks.length) {
        const currentIndex = index;
        const task = tasks[index];

        index++;
        running++;

        task()
          .then(result => {
            results[currentIndex] = result;
            running--;
            completed++;
            runNext();
          })
          .catch(reject);
      }
    }

    runNext();
  });
}

runWithLimit(tasks,3)