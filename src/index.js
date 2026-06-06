import "./styles.css";
import createHero from "./components/hero.js";
import createCustomer from "./components/customer.js";
import createCart from "./components/foodCart.js";
import createFooter from "./components/footer.js";
import createMenu from "./components/menu.js";
import createNavbar from "./components/navbar.js";
import createService from "./components/services.js";

const navSection = createNavbar();
const heroSection = createHero();
const MenuSection = createMenu();
const serviceSection = createService();
const cartSection = createCart();
const customerSection = createCustomer();
const footerSection = createFooter();

/**
 * Utility used by hero.js to build the three featured food cards.
 * Kept here so hero.js can import it without a circular-dep issue.
 */
export function createCardList(items) {
  const ul = document.createElement("ul");
  items.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add(item);
    ul.appendChild(li);
  });
  return ul;
}

/*
 * Append every section directly to <body> so that sections with
 * background-color (service, banner) can bleed edge-to-edge.
 * Width/centering is handled by .section__container inside each section.
 */
document.body.append(
  navSection,
  heroSection,
  MenuSection,
  serviceSection,
  cartSection,
  customerSection,
  footerSection,
);
