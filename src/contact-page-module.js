function createContact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "Contact Us";

    contact.appendChild(contactTitle);
    contact.appendChild(contactCard("Artie Bucco", "Chef", "555-3233-232A", "artieBucco@notFake.com"));
    contact.appendChild(contactCard("Charmaine Bucco", "Manager", "555-2323-222E", "charmaineBucco@notFake.com"));
    
    return contact
}

function contactCard(nameTitle, expertise, phone, mail){
    const card = document.createElement("div");
    card.classList.add("contact-card")

    const contactName = document.createElement("h3");
    contactName.textContent = nameTitle;

    card.appendChild(contactName);
    card.appendChild(createParagraph(expertise));
    card.appendChild(createParagraph(phone));
    card.appendChild(createParagraph(mail));

    return card

}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
}

function loadContact(){
    const main = document.getElementById("main");
    if (main.classList.contains("main-home")) main.classList.remove("main-home");
    main.textContent = "";
    main.appendChild(createContact());
}


export default loadContact;