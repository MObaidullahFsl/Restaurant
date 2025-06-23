import "./style2.css"


const makemenu = function(){


const content = document.querySelector("#content")
const img = document.querySelector(".bgimg")

const textBox = document.createElement("div")
textBox.classList.toggle("box2")
img.appendChild(textBox);


const menu = document.createElement("div")
menu.classList.toggle("menuTitle")
menu.textContent="Menu"
textBox.appendChild(menu)


  const menuItems = [
    { name: "Classic Burger", price: "$5.99" },
    { name: "Cheesy Pizza", price: "$7.49" },
    { name: "Spicy Wings", price: "$6.25" },
    { name: "Chocolate Shake", price: "$3.75" },
  ];

  menuItems.forEach((item) => {
    const dish = document.createElement("div");
    dish.classList.add("menu-item");
    dish.textContent = `${item.name}    —   ${item.price}`;
    textBox.appendChild(dish);
  });


}

export default makemenu;