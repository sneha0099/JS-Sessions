const btn = document.getElementsByClassName("btn")[0]

let cnt = 0;
btn.addEventListener("click", ()=>{
    cnt += 1;
    btn.innerHTML = `clicked ${cnt} times`
})