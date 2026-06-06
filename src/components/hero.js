import { createCardList } from "../index.js";
import {header , headerContent1, headerContent2, headerContent3 , user} from "../assets/images.js"

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

    const rightImg = document.createElement("div")
    rightImg.classList.add("rightImg")
    const Img = document.createElement("img");
    Img.src = header;
    Img.alt = "header image with black background"

    const heroBtn = document.createElement("div");
    heroBtn.classList.add("heroBtns")
    const orderBtn = document.createElement("button");
    orderBtn.classList.add("button")
    orderBtn.classList.add("coloredBtn")
    orderBtn.textContent = "Order Now →"


    const bookBtn = document.createElement("button");
    bookBtn.classList.add("button")
    bookBtn.textContent = "Book A Table"

    const featureItems = createCardList(['chicken','handi', 'kala']);
    featureItems.classList.add("featureItems");
    const chicken = featureItems.querySelector(".chicken");
    const handi = featureItems.querySelector(".handi");
    const kala = featureItems.querySelector(".kala");
    

    const chickenImg = document.createElement("img")
    chickenImg.src = headerContent1
    chickenImg.alt = "chicken biryani image"
    const chickenName = document.createElement("p")
    chickenName.textContent = 'Chicken Biryani'

    const handiImg = document.createElement("img")
    handiImg.src = headerContent2
    handiImg.alt = "Handi Mutton image"
    const handiName = document.createElement("p")
    handiName.textContent = 'Handi Mutton'

    const kalaImg = document.createElement("img")
    kalaImg.src = headerContent3
    kalaImg.alt = "kala bhuna image"
    const kalaName = document.createElement("p")
    kalaName.textContent = 'Kala Bhuna'

    const aboutService = document.createElement("div");
    aboutService.classList.add("aboutService"); 
    const heroImg = document.createElement("img");
    heroImg.classList.add("heroCustomerImg");
    heroImg.src = user;
    heroImg.alt = "user hero image";
    const deliverPara = document.createElement("p");
    deliverPara.classList.add("deliverPara")
    deliverPara.textContent = "it delivers convenience and flavor with lightning-fast delivery";

    aboutService.append(heroImg, deliverPara)
    
    heroSection.append(leftSection,rightSection)
    leftSection.append(healthySection, callDiv, heroBtn , featureItems)
    rightSection.append(rightImg, aboutService);
    rightImg.append(Img);

    healthySection.append(ImgContainer,healthypara)
    heroBtn.append(orderBtn,bookBtn);
    // featureItems.append(chicken,handi,kala);
    chicken.append(chickenImg,chickenName)
    handi.append(handiImg,handiName)
    kala.append(kalaImg,kalaName)
    ImgContainer.append(healthyImg)
    callDiv.append(callHeader,callPara)

    return heroSection
}