import { logoDark } from "../assets/images.js";

function createLinkColumn(heading, links) {
  const col = document.createElement("div");
  col.classList.add("footer__col");

  const h4 = document.createElement("h4");
  h4.textContent = heading;

  const ul = document.createElement("ul");
  ul.classList.add("footer__links");

  links.forEach(function (linkText) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = linkText;
    li.append(a);
    ul.append(li);
  });

  col.append(h4, ul);
  return col;
}

export default function createFooter() {
  const footerEl = document.createElement("footer");

  // ── 4-column grid container ────────────────────────────────────────────
  const container = document.createElement("div");
  container.classList.add("section__container");
  container.classList.add("footer__container");

  // Column 1 — logo + tagline
  const logoCol = document.createElement("div");
  logoCol.classList.add("footer__col");
  logoCol.classList.add("footer__logo");

  const logoImg = document.createElement("img");
  logoImg.src = logoDark;
  logoImg.alt = "Falcon restaurant logo";

  const logoPara = document.createElement("p");
  logoPara.textContent =
    "Experience fast delivery, easy pick-up, and a menu crafted to satisfy every craving. Eat healthy, stay happy!";

  logoCol.append(logoImg, logoPara);

  // Columns 2–4
  const productCol = createLinkColumn("Product", [
    "Home",
    "Products",
    "About",
    "Contact",
    "FAQ",
    "Releases",
  ]);

  const socialCol = createLinkColumn("Social", [
    "Twitter",
    "Facebook",
    "Youtube",
    "LinkedIn",
  ]);

  const legalCol = createLinkColumn("Legal", [
    "Terms",
    "Privacy",
    "Cookies",
    "Licenses",
    "Settings",
  ]);

  container.append(logoCol, productCol, socialCol, legalCol);

  // ── Footer bar — sits outside the column grid ──────────────────────────
  const footerBar = document.createElement("div");
  footerBar.classList.add("footer__bar");

  const copyright = document.createElement("p");
  copyright.textContent =
    "Copyright \u00A9 2026 FeteDev. All rights reserved.";

  footerBar.append(copyright);

  footerEl.append(container, footerBar);

  return footerEl;
}
