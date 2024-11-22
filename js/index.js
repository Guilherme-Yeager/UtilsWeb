const toogleBtn = document.querySelector(".toggle_btn")
const toogleBtIcon = document.querySelector(".toggle_btn i")
const dropdown = document.querySelector(".dropdown")

toogleBtn.onclick = function(){
    dropdown.classList.toggle("open")
    const isOpen = dropdown.classList.contains("open")
    toogleBtIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

const header = document.querySelector("header");

function addCircle(top, left, size) {
    const circle = document.createElement("div")
    circle.classList.add("circle")
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${top}px`
    circle.style.left = `${left}px`
    header.appendChild(circle)
}

for(let i = 0; i < 15; i++){
    addCircle(-25 + Math.floor(Math.random() * 21) + (-15) + (-5), -10 + (i * 90), 120)
}
