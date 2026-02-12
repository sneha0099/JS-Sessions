// 1) Create an HTML file with a paragraph <p id="secret-message">Initial Text</p> and a button.
// On button click, select the paragraph using getElementById and change its text to "You found the secret message!".

const msg = document.getElementById("secret-message")

const btn = document.getElementById("secret-button")

btn.addEventListener("click", ()=>{
    
    msg.innerHTML = "you found secret message"
})
