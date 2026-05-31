import { createCardList } from "../index.js";

export default function createHero(){
    const heroSection = document.createElement("section");
    const leftSection = document.createElement("div");
    const rightSection = document.createElement("div");
    const motiveSection = document.createElement("div");
    const callDiv = document.createElement("div");
    const orderBtn = document.createElement("button");
    const bookBtn = document.createElement("button");

    const featureItems = createCardList(['chicken','handi', 'kala']);

    const heroImg = document.createElement("div");
    const aboutService = document.createElement("div");
    const profileImg = document.createElement("img");
    const deliverPara = document.createElement("p");
}