import "./styles/style3.css"


const makeabout = function(){
    
const img = document.querySelector(".bgimg")

const textBox = document.createElement("div")
textBox.classList.toggle("box3")
img.appendChild(textBox);


const contact = document.createElement("div")
contact.classList.toggle("contactTitle")
contact.textContent="Contact Us"
textBox.appendChild(contact)

const location = document.createElement("div")
location.classList.toggle("location")
location.textContent="Location : 13 WestWood Avenue, Sunbay Drive, Vice Beach, Leonida"
textBox.appendChild(location);

const phone = document.createElement("div")
phone.classList.toggle("phone")
phone.textContent="Phone : 123-123-123"
textBox.appendChild(phone);


const mail = document.createElement("div")
mail.classList.toggle("mail")
mail.textContent="Mail : JimBob312@wahoo.com"
textBox.appendChild(mail)



}

export default makeabout;

