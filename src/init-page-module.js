const headerDiv = document.createElement("div");
headerDiv.className = "header";
headerDiv.innerHTML = `<h1>Vesuvio</h1><ul>
<li>Home
    <div class="coverhome cover"></div>
</li>
<li>Menu
    <div class="covermenu cover hidden"></div>
</li>
<li>Contact
    <div class="covercontact cover hidden"></div>
</li>
</ul>`;

const mainDiv = document.createElement("div");
mainDiv.className = "main main-home";
mainDiv.id = "main";
mainDiv.innerHTML = `<div id="restaurant-text">This Italian ristorante is magnificent! Our chef Artie Bucco and hostess Charmaine Bucco await your arrival! We have tons of dishes: from Spaghetti Bolognese to our famous Osso Bucco. We even on rare occasions can cook some rabbit for you, following the family recipe in Artie's bloodline. Make sure to pay and to not flirt with our waitresses, or keep them in any way occupied so they're distracted from work.</div>`;

const footerDiv = document.createElement("div");
footerDiv.className = "footer";
footerDiv.innerHTML = `<p>made by <a href="http://github.com/Kessius00" target="_blank" rel="noopener noreferrer">Kessius</a></p>`;


export {headerDiv, mainDiv, footerDiv};

