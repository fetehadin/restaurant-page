import "./styles.css";
import createHero from "./components/hero.js";
import createCustomer from "./components/customer.js";
import createCart from "./components/foodCart.js";
import createFooter from "./components/footer.js";
import createMenu from "./components/menu.js";
import createNavbar from "./components/navbar.js";
import createService from "./components/services.js";

const heroSection = createHero();
const customerSection = createCustomer();
const cartSection = createCart();
const footerSection = createFooter();
const MenuSection = createMenu();
const navSection = createNavbar();
const serviceSection = createService();




export function createCardList(items){
    const ul = document.createElement("ul");
    items.forEach(item=>{
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.classList.add(item);

        li.appendChild(div);
        ul.appendChild(li);
    });
    return ul;
}


document.body.appendChild(navSection)
document.body.appendChild(heroSection);
document.body.appendChild(MenuSection);
document.body.appendChild(serviceSection);
document.body.appendChild(cartSection);
document.body.appendChild(customerSection);
document.body.appendChild(footerSection);





