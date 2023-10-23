const headerDiv = document.createElement("div");
headerDiv.className = "header";
headerDiv.innerHTML = `<h1>Vesuvio</h1><ul>
<li>Home
    <div class="coverhome cover hidden"></div>
</li>
<li>Menu
    <div class="covermenu cover hidden"></div>
</li>
<li>Contact
    <div class="covercontact cover"></div>
</li>
</ul>`;

const mainDiv = document.createElement("div");
mainDiv.className = "main main-contact";
mainDiv.id = "main";
mainDiv.innerHTML = ``;

const footerDiv = document.createElement("div");
footerDiv.className = "footer";
footerDiv.innerHTML = `<p>made by <a href="http://github.com/Kessius00" target="_blank" rel="noopener noreferrer">Kessius</a></p>`;


export {headerDiv, mainDiv, footerDiv};

