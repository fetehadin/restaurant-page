import { banner } from "../assets/images.js";

export default function createCart() {
  const section = document.createElement("section");
  section.classList.add("banner");

  const container = document.createElement("div");
  container.classList.add("section__container");
  container.classList.add("banner__container");

  // Left column — banner content
  const bannerContent = document.createElement("div");
  bannerContent.classList.add("banner__content");

  const h2 = document.createElement("h2");
  h2.classList.add("section__header");
  h2.textContent = "Eat Healthy, ";
  const headerSpan = document.createElement("span");
  headerSpan.textContent = "Stay Healthy";
  h2.append(headerSpan);

  const p = document.createElement("p");
  p.textContent =
    "At Food Plaza, we believe that good food is the foundation of a healthy life. Our meals are crafted with fresh ingredients and balanced nutrition, helping you maintain a healthy lifestyle while enjoying delicious flavors.";

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Read More";

  bannerContent.append(h2, p, btn);

  // Right column — banner image
  const bannerImage = document.createElement("div");
  bannerImage.classList.add("banner__image");

  const img = document.createElement("img");
  img.src = banner;
  img.alt = "Eat Healthy Stay Healthy";
  bannerImage.append(img);

  container.append(bannerContent, bannerImage);
  section.append(container);

  return section;
}
