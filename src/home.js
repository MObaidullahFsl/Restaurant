import "./styles/style1.css"



const makehome= function(){
const content = document.querySelector("#content")
const img = document.querySelector(".bgimg")

const textBox = document.createElement("div")
textBox.classList.toggle("box")
img.appendChild(textBox);


const title = document.createElement("div")
title.classList.toggle("title")
title.textContent="El Duce"
textBox.appendChild(title)

const desc = document.createElement("div")
desc.classList.toggle("desc")
desc.textContent="Cafe Da Roma"
textBox.appendChild(desc)


const time = document.createElement("div")
time.classList.toggle("time")
time.textContent="Monday - Friday ( 10:00 - 22:00 )"
textBox.appendChild(time)


}

export default makehome;