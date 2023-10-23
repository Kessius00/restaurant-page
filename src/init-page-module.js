function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");
    let restaurantText = createParagraph("This Italian ristorante is magnificent! Our chef Artie Bucco and hostess Charmaine Bucco await your arrival! We have tons of dishes: from Spaghetti Bolognese to our famous Osso Bucco. We even on rare occasions can cook some rabbit for you, following the family recipe in Artie's bloodline. Make sure to pay and to not flirt with our waitresses, or keep them in any way occupied so they're distracted from work.");
    restaurantText.id = "restaurant-text";
    home.appendChild(restaurantText);
    return home
}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
}

function loadHome(){
    const main = document.getElementById("main");
    main.classList.add("main-home");
    main.textContent = "";
    main.appendChild(createHome());
}


export default loadHome;