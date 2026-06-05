import { createCardList } from "../index.js";
import {header} from "../assets/images.js"

export default function createHero(){
    const heroSection = document.createElement("section");
    heroSection.classList.add("heroSection");
    const leftSection = document.createElement("div");
    leftSection.classList.add("leftSection");
    const rightSection = document.createElement("div");
    rightSection.classList.add("rightSection");

    const motiveSection = document.createElement("div");
    motiveSection.classList.add("motiveSection");

    const healthySection = document.createElement("div");
    healthySection.classList.add("healthy");
    const ImgContainer = document.createElement("div")
    ImgContainer.classList.add("ImgContainer");
    const healthyImg = document.createElement("img")
    healthyImg.classList.add("healthyImg");
    healthyImg.src = header;
    healthyImg.alt = "healthy image";
    const healthypara = document.createElement("h2");
    healthypara.classList.add("healthypara")
    healthypara.textContent = "Eat Healthy, stay Healthy";


    const callDiv = document.createElement("div");
    callDiv.classList.add("callDiv");
    const callHeader = document.createElement("h1");
    callHeader.classList.add("callHeader");
    callHeader.textContent = 'Be The ';
    const span = document.createElement('span');
    span.textContent = 'First';
    callHeader.append(span, ' Delivery & Easy Pick Up');
    const callPara = document.createElement("p");
    callPara.classList.add("callPara")
    callPara.textContent = "Be the first to experience hassle-free delivery and easy pick-up options designed to save your time and satisy your cravings!"

    const leftImg = document.createElement("div")
    leftImg.classList.add("leftImg")
    const Img = document.createElement("img");
    Img.src = header;
    Img.alt = "header image with black background"

    const orderBtn = document.createElement("button");
    const bookBtn = document.createElement("button");

    const featureItems = createCardList(['chicken','handi', 'kala']);

    const heroImg = document.createElement("div");
    const aboutService = document.createElement("div");
    const profileImg = document.createElement("img");
    const deliverPara = document.createElement("p");
    
    heroSection.append(leftSection,rightSection)
    leftSection.append(healthySection, callDiv)
    healthySection.append(ImgContainer,healthypara)
    ImgContainer.append(healthyImg)
    callDiv.append(callHeader,callPara)

    return heroSection
}