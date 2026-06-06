import { customer, customer1, customer2, customer3 } from "../assets/images.js";

const testimonials = [
  {
    verified: "Verified Purchase",
    date: "23 Oct 2024",
    text: "This is my go-to choice for healthy meals on busy days. I appreciate how they balance flavor with nutrition, making it easy to stick to my healthy eating goals while still enjoying delicious food.",
    img: customer1,
    name: "Sarah Johnson",
    role: "Nutritionist",
  },
  {
    verified: "Verified Purchase",
    date: "15 Nov 2024",
    text: "I love the convenience and variety that they offers. The real-time order tracking is such a thoughtful feature\u2014it ensures I never have to wonder about my meal\u2019s status.",
    img: customer2,
    name: "Rajesh Patel",
    role: "Software Engineer",
  },
  {
    verified: "Verified Purchase",
    date: "23 Nov 2024",
    text: "The dishes are not only flavorful but also packed with nutrients, which is essential for my active lifestyle. It\u2019s a fantastic option for anyone who values healthy eating!",
    img: customer3,
    name: "Emily Brown",
    role: "Fitness Trainer",
  },
];

function buildCard(data) {
  const card = document.createElement("div");
  card.classList.add("customer__card");

  // Card header — verified badge + date
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("customer__card__header");

  const verifiedDiv = document.createElement("div");
  verifiedDiv.textContent = data.verified;

  const dateSpan = document.createElement("span");
  dateSpan.textContent = data.date;

  cardHeader.append(verifiedDiv, dateSpan);

  // Review text
  const p = document.createElement("p");
  p.textContent = data.text;

  // Card footer — avatar + name/role/stars
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("customer__card__footer");

  const avatarImg = document.createElement("img");
  avatarImg.src = data.img;
  avatarImg.alt = data.name;

  const infoDiv = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = data.name;

  const h5 = document.createElement("h5");
  h5.textContent = data.role;

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("customer__rating");
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.textContent = "\u2605";
    ratingDiv.append(star);
  }

  infoDiv.append(h4, h5, ratingDiv);
  cardFooter.append(avatarImg, infoDiv);

  card.append(cardHeader, p, cardFooter);
  return card;
}

export default function createCustomer() {
  const section = document.createElement("section");

  const container = document.createElement("div");
  container.classList.add("section__container");
  container.classList.add("customer__container");

  // ── Left column — decorative photo ──────────────────────────────────────
  const customerImage = document.createElement("div");
  customerImage.classList.add("customer__image");

  const decorImg = document.createElement("img");
  decorImg.src = customer;
  decorImg.alt = "Customer dining";
  customerImage.append(decorImg);

  // ── Right column — header + swiper + controls ────────────────────────────
  const customerContent = document.createElement("div");
  customerContent.classList.add("customer__content");

  // Section heading
  const h2 = document.createElement("h2");
  h2.classList.add("section__header");
  h2.textContent = "Customers ";
  const headingSpan = document.createElement("span");
  headingSpan.textContent = "Reaction";
  h2.append(headingSpan);

  // Swiper viewport
  const swiper = document.createElement("div");
  swiper.classList.add("swiper");

  let currentIndex = 0;

  // Dots are created before updateSwiper so the closure can reference them
  const dots = [];

  function updateSwiper() {
    while (swiper.firstChild) {
      swiper.removeChild(swiper.firstChild);
    }
    swiper.append(buildCard(testimonials[currentIndex]));

    dots.forEach(function (dot, i) {
      dot.textContent = i === currentIndex ? "\u25CF" : "\u25CB";
    });
  }

  // ── Controls row ─────────────────────────────────────────────────────────
  const controls = document.createElement("div");
  controls.classList.add("customer__swiper__controls");

  // Left side — navigation dots
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("customer__rating");

  testimonials.forEach(function (_, i) {
    const dot = document.createElement("span");
    dot.textContent = i === 0 ? "\u25CF" : "\u25CB";
    dot.addEventListener("click", function () {
      currentIndex = i;
      updateSwiper();
    });
    dots.push(dot);
    dotsContainer.append(dot);
  });

  // Right side — prev / next buttons
  const btnContainer = document.createElement("div");
  btnContainer.style.display = "flex";
  btnContainer.style.gap = "0.5rem";

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("btn");
  prevBtn.textContent = "\u2039";
  prevBtn.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSwiper();
  });

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("btn");
  nextBtn.textContent = "\u203a";
  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSwiper();
  });

  btnContainer.append(prevBtn, nextBtn);
  controls.append(dotsContainer, btnContainer);

  // Render the first card
  updateSwiper();

  customerContent.append(h2, swiper, controls);
  container.append(customerImage, customerContent);
  section.append(container);

  return section;
}
