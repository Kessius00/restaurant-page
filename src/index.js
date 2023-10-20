import "./main.css";
import {headerDiv as headerInit, mainDiv as mainInit, footerDiv as footerInit} from "./init-page-module";


const contentDiv = document.querySelector('#content');

contentDiv.appendChild(headerInit);
contentDiv.appendChild(mainInit);
contentDiv.appendChild(footerInit);
