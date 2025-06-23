import "./style.css"

const content = document.querySelector("#content")


const img = document.createElement("div");
img.classList.toggle("bgimg");


content.appendChild(img);

console.log("something")

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


