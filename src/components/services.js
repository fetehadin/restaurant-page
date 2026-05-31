import { createCardList } from "../index.js";

export default function createService(){
    const serviceSection = document.createElement("section");
    const serviceHead = document.createElement("div");
    const serviceCards = createCardList(['chose', 'track' , 'meal']);

    serviceSection.append(serviceHead, serviceCards);

    return serviceSection;
}