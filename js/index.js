const toogleBtn = document.querySelector(".toggle_btn")
const toogleBtIcon = document.querySelector(".toggle_btn i")
const dropdown = document.querySelector(".dropdown")

toogleBtn.onclick = function(){
    dropdown.classList.toggle("open")
    const isOpen = dropdown.classList.contains("open")
    toogleBtIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}