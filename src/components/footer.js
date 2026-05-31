import { createCardList } from "../index.js";

function createLinkList(items){
    const ul = document.createElement("ul");
    items.forEach(item=>{
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add(item);

        li.appendChild(a);
        ul.appendChild(li);
    });
    return ul;
}

export default function createFooter(){
    const footer = document.createElement("section");
    const footerTitles = createCardList(['logo', 'product' , 'social', 'legal']);


    const products = createLinkList(['Home','products','About','Contact','FAQ','Releases']);
    const Social = createLinkList(['Twitter','Facebook','YouTube','Linkedin'])
    const Legal = createLinkList(['Terms','Privacy','Cookies','Licenses','Settings']);

    const footerEnd = document.createElement("p")
}