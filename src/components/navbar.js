import { logoDark, bag , search} from "../assets/images.js";

function createNav(items) {
    const ul = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = item;
        a.href = "#";

        li.appendChild(a);
        ul.appendChild(li);
    });
    return ul;
}

export default function createNavbar(){
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    nav.classList.add("navBar");
    const navItems = createNav(["Home", "Menu", "Services", "Food Cart"]);

    const linkDiv = document.createElement("div");
    const logoImg = document.createElement("img");
    logoImg.classList.add("logo-img")
    logoImg.src = logoDark;
    logoImg.alt = "logooo image";
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("iconsDiv")
    const searchIcon = document.createElement("img");
    searchIcon.src = search;
    searchIcon.alt = "search icon";
    const cartIcon = document.createElement("img");
    cartIcon.src = bag;
    
    header.append(nav)
    nav.append(logoImg,navItems,iconsDiv);
    iconsDiv.append(searchIcon,cartIcon);
    return header;
}