const p = document.querySelector("#count")
const btn = document.querySelector("#btn")

let count = 0

btn.addEventListener("click", function () {

    count++

    p.textContent = count

})