const bodyColor = document.querySelector("body")
const colorRed = document.querySelector("#Red")
const colorBlue = document.querySelector("#Blue")
const colorYellow = document.querySelector("#Yellow")

function changeRed(){
    bodyColor.style.backgroundColor = "red"
}

colorRed.addEventListener("click", changeRed)


function changeBlue(){
    bodyColor.style.backgroundColor = "blue"
}

colorBlue.addEventListener("click", changeBlue)


function changeYellow(){
    bodyColor.style.backgroundColor = "Yellow"
}

colorYellow.addEventListener("click", changeYellow)



