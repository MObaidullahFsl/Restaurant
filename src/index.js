import "./styles/style.css"
import makehome from "./home"
import makemenu from "./menu"
import makeabout from "./about"

const content = document.querySelector("#content")

const home = document.querySelector(".Home")
const menu = document.querySelector(".Menu")
const about = document.querySelector(".About")

const img = document.createElement("div");
img.classList.toggle("bgimg");



content.appendChild(img);

console.log("something")

function clean(){
    img.innerHTML = "";
}

home.addEventListener("click", ()=>{
    clean();
    makehome();
})

menu.addEventListener("click", ()=>{
    clean();
    makemenu();
})

about.addEventListener("click", ()=>{
    clean();
    makeabout();
})

window.onload = function () {
    clean();
    makehome();
};
