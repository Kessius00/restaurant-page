
const headerDiv = document.createElement("div");
headerDiv.className = "header header-menu";
headerDiv.innerHTML = `<h1>Vesuvio</h1>
<ul>
    <li>Home
        <div class="coverhome cover hidden"></div>
    </li>
    <li>Menu
        <div class="covermenu cover"></div>
    </li>
    <li>Contact
        <div class="covercontact cover hidden"></div>
    </li>
</ul>`;

const mainDiv = document.createElement("div");
mainDiv.className = "main main-menu";
mainDiv.id = "main";
mainDiv.innerHTML = `
<div class="menu-container">
    <div class="menu-item">
        <div class="menu-text">
            <h2>Strawberry Pizza</h2>
            <p>Strawberry pizza, a nightmarish concept to the authentic Italian cuisine. But it tastes great.</p>
            <div class="price">$12</div>
        </div>
        <img src="./assets/pexels-narda-yescas-1566837.jpg" alt="Pizza with cheese, ham and some slices of strawberries">
    </div>
    <div class="menu-item">
        <div class="menu-text">
            <h2>Penne Bolognese</h2>
            <p>The classic. Sit back, relax, and eat.</p>
            <div class="price">$16</div>
        </div>
        <img src="./assets/pexels-engin-akyurt-1437267.jpg" alt="Penne bolognese">
    </div>
    <div class="menu-item">
        <div class="menu-text">
            <h2>Pasta Carbonara</h2>
            <p>Quite heavy on the stomach, but a classic nevertheless.</p>
            <div class="price">$19</div>
        </div>
        <img src="./assets/pexels-engin-akyurt-1487511.jpg" alt="Penne Carbonara">
    </div>
    <div class="menu-item">
        <div class="menu-text">
            <h2>Pizza</h2>
            <p>With ingredients of your choosing. You name it, we have it.</p>
            <div class="price">$21</div>
        </div>
        <img src="./assets/pexels-kristina-paukshtite-1146760.jpg" alt="Pizza">
    </div>
</div>`;

const footerDiv = document.createElement("div");
footerDiv.className = "footer";
footerDiv.innerHTML = `<p>made by <a href="http://github.com/Kessius00" target="_blank" rel="noopener noreferrer">Kessius</a></p>`;


export {headerDiv, mainDiv, footerDiv};



