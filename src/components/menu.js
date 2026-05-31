import { createCardList } from "../index.js";

export default function createMenu(){
    const MenuSection = document.createElement("section");
    const menuHead = document.createElement("div");

    const menuCards = createCardList(['bhua', 'mutton' , 'egg']);
    const seeAllBtn = document.createElement('button');
}