function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu", "main-menu");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.appendChild(createMenuItem("Strawberry Pizza","Strawberry pizza, a nightmarish concept to the authentic Italian cuisine. But it tastes great.",
    "$12","./assets/pexels-narda-yescas-1566837.jpg","Pizza with cheese, ham and some slices of strawberries"));
    menuContainer.appendChild(createMenuItem("Penne Bolognese", "The classic. Sit back, relax, and eat.","$16",
    "./assets/pexels-engin-akyurt-1437267.jpg","Penne bolognese"));
    menuContainer.appendChild(createMenuItem("Pasta Carbonara","Quite heavy on the stomach, but a classic nevertheless.","$19",
    "./assets/pexels-engin-akyurt-1487511.jpg","Pasta Carbonara"));
    menuContainer.appendChild(createMenuItem("Pizza", "With ingredients of your choosing. You name it, we have it.","$21",
    "./assets/pexels-kristina-paukshtite-1146760.jpg", "Pizza"));


    menu.appendChild(menuContainer);


    return menu
}

function createMenuItem(dishTitle, dishInformation, dishPrice, dishImage, dishImageAlt){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemText = document.createElement("div");
    menuItemText.classList.add("menu-text");

    const dishName = document.createElement("h2");
    dishName.textContent = dishTitle;

    const price = document.createElement('div');
    price.classList.add("price");
    price.textContent = dishPrice;

    menuItemText.appendChild(dishName);
    menuItemText.appendChild(createParagraph(dishInformation));
    menuItemText.appendChild(price);

    const image = document.createElement("img");
    image.src = dishImage;
    image.alt = dishImageAlt;

    menuItem.appendChild(menuItemText);
    menuItem.appendChild(image);

    return menuItem

}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
}


function loadMenu(){
    const main = document.getElementById("main");
    if (main.classList.contains("main-home")) main.classList.remove("main-home");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;


