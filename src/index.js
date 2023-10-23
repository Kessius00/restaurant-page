import "./main.css";
import {headerDiv as headerInit, mainDiv as mainInit, footerDiv as footerInit} from "./init-page-module";
import {headerDiv as headerMenu, mainDiv as mainMenu, footerDiv as footerMenu} from "./menu-page-module";
import {headerDiv as headerContact, mainDiv as mainContact, footerDiv as footerContact} from "./contact-page-module";



const contentDiv = document.querySelector('#content');

contentDiv.appendChild(headerInit);
contentDiv.appendChild(mainInit);
contentDiv.appendChild(footerInit);


const coverMenu = document.querySelector(".covermenu");
const coverHome = document.querySelector(".coverhome");
const coverContact = document.querySelector(".covercontact");


function clearPage(){
    const divsToRemove = contentDiv.children;
    while (divsToRemove.length > 0){
        contentDiv.removeChild(divsToRemove[0]);
    }
    
}

coverMenu.addEventListener('click', ()=>{
    clearPage();
    contentDiv.appendChild(headerMenu);
    contentDiv.appendChild(mainMenu);
    contentDiv.appendChild(footerMenu);

});

coverHome.addEventListener('click', ()=>{
    clearPage();
    // contentDiv.appendChild(headerInit);
    // contentDiv.appendChild(mainInit);
    // contentDiv.appendChild(footerInit);

});

coverContact.addEventListener('click', ()=>{
    clearPage();
    contentDiv.appendChild(headerContact);
    contentDiv.appendChild(mainContact);
    contentDiv.appendChild(footerContact);

});