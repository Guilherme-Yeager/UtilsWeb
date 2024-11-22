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

addCircle(-25, -10, 110)
addCircle(-35, 80, 110)
addCircle(-20, 170, 110)
addCircle(-28, 260, 110)
addCircle(-32, 350, 110)
addCircle(-22, 440, 110)
addCircle(-30, 530, 110)
addCircle(-20, 610, 110)
addCircle(-30, 700, 110)
addCircle(-28, 790, 110)
addCircle(-18, 880, 110)
addCircle(-32, 970, 110)