import { service1, service2, service3 } from "../assets/images.js";

export default function createService() {
  const section = document.createElement("section");
  section.classList.add("service");

  const container = document.createElement("div");
  container.classList.add("section__container");
  container.classList.add("service__container");

  // Header wrapper
  const headerWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.classList.add("section__header");
  h2.textContent = "How Does It ";
  const headerSpan = document.createElement("span");
  headerSpan.textContent = "Works";
  h2.append(headerSpan);
  headerWrap.append(h2);

  // Service data
  const services = [
    {
      src: service1,
      alt: "Choose Your Meals",
      title: "Chose Your Meals",
      desc: "Browse through our delicious menu filled with a variety of dishes and select your favorites effortlessly to satisfy your cravings.",
    },
    {
      src: service2,
      alt: "Track Your Order",
      title: "Track Your Order",
      desc: "Keep an eye on your meal with real-time updates from the kitchen to your location, ensuring a seamless and transparent experience.",
    },
    {
      src: service3,
      alt: "Fast Delivery",
      title: "Chose Your Meals",
      desc: "Experience ultimate convenience with easy pick-up options or doorstep delivery, bringing your favorite meals straight to you.",
    },
  ];

  // Service grid
  const serviceGrid = document.createElement("div");
  serviceGrid.classList.add("service__grid");

  services.forEach(function (service) {
    const card = document.createElement("div");
    card.classList.add("service__card");

    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    img.src = service.src;
    img.alt = service.alt;
    imgWrapper.append(img);

    const h4 = document.createElement("h4");
    h4.textContent = service.title;

    const p = document.createElement("p");
    p.textContent = service.desc;

    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "Read More";

    card.append(imgWrapper, h4, p, a);
    serviceGrid.append(card);
  });

  container.append(headerWrap, serviceGrid);
  section.append(container);

  return section;
}
