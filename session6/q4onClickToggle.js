// 4) Create a <div> with a black border and white background.
// Define a CSS class .active that changes the background to green and text color to white.
// On click, toggle the .active class using classList.toggle().

const current = document.getElementsByClassName("current")[0];

current.addEventListener("click", ()=>{
    current.classList.toggle("active")
})