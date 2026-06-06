import { menu1, menu2, menu3 } from "../assets/images.js";

export default function createMenu() {
  const section = document.createElement("section");
  section.classList.add("menu");

  const container = document.createElement("div");
  container.classList.add("section__container");
  container.classList.add("menu__container");

  // Header wrapper
  const headerWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.classList.add("section__header");
  h2.textContent = "Our Popular ";
  const headerSpan = document.createElement("span");
  headerSpan.textContent = "Dishes";
  h2.append(headerSpan);
  headerWrap.append(h2);

  // Dish data
  const dishes = [
    {
      src: menu1,
      alt: "Kala Bhuna",
      name: "Kala Bhuna",
      desc: "A rich and flavorful slow-cooked beef dish, infused with aromatic spices for a traditional taste.",
      price: "$50.99",
    },
    {
      src: menu2,
      alt: "Handi Mutton",
      name: "Handi Mutton",
      desc: "Tender mutton simmered to perfection in pot with blend of spices for an authentic and hearty meal.",
      price: "$75.49",
    },
    {
      src: menu3,
      alt: "Egg Curry",
      name: "Egg Curry",
      desc: "A classic dish featuring boiled eggs in a spiced tomato and onion gravy, perfect with rice or bread.",
      price: "$30.99",
    },
  ];

  // Menu grid
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu__grid");

  dishes.forEach(function (dish) {
    const card = document.createElement("div");
    card.classList.add("menu__card");

    const img = document.createElement("img");
    img.src = dish.src;
    img.alt = dish.alt;

    const h4 = document.createElement("h4");
    h4.textContent = dish.name;

    const p = document.createElement("p");
    p.textContent = dish.desc;

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("menu__card__footer");

    const h3 = document.createElement("h3");
    h3.textContent = dish.price;

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Add To Cart";

    cardFooter.append(h3, btn);
    card.append(img, h4, p, cardFooter);
    menuGrid.append(card);
  });

  // "See All Dishes" button wrapper
  const menuBtnWrap = document.createElement("div");
  menuBtnWrap.classList.add("menu__btn");

  const seeAllBtn = document.createElement("button");
  seeAllBtn.classList.add("btn");
  seeAllBtn.textContent = "See All Dishes";
  menuBtnWrap.append(seeAllBtn);

  container.append(headerWrap, menuGrid, menuBtnWrap);
  section.append(container);

  return section;
}
