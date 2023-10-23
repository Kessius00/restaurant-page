import loadHome from "./init-page-module";
import loadMenu from "./menu-page-module";
import loadContact from "./contact-page-module";


function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.innerHTML="Vesuvio";
    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header

}

function createNav(){
    const nav = document.createElement("nav");
    
    const homeButton = document.createElement("button");
    homeButton.classList.add("home-button","nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e)=>{
        if (e.target.classList.contains("active")){
            return;
        } else{
            setActiveButton(homeButton);
            loadHome();
        }
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button","nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e)=>{
        if (e.target.classList.contains("active")){
            return;
        } else{
            setActiveButton(menuButton);
            loadMenu();
        }
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("contact-button","nav-button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e)=>{
        if (e.target.classList.contains("active")){
            return;
        } else{
            setActiveButton(contactButton);
            loadContact();
        }
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((b)=>{
        if (b.classList.contains("active")){
            b.classList.remove("active");
        }
    });

    button.classList.add("active")
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const textFooter = document.createElement("p");
    textFooter.textContent = "made by "

    const githubLink = document.createElement("a");
    githubLink.href = "http://github.com/Kessius00";
    githubLink.target = "_blank";
    githubLink.textContent = "Kessius";

    textFooter.appendChild(githubLink);
    footer.appendChild(textFooter);

    return footer

}


function initializeWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".home-button"));
    loadHome();
}

export default initializeWebsite;