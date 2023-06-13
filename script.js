const mainCont = document.querySelector(".container")
const thanksCont = document.querySelector(".thanks")
const button = document.querySelector("#submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll("#btn")

button.addEventListener("click", () => {
    thanksCont.classList.remove("hidden")
    mainCont.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})