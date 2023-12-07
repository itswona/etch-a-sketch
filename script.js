const body = document.querySelector("body");
const container = document.createElement("div");

const item1 = document.createElement("div");
const item2 = document.createElement("div");
const item3 = document.createElement("div");
const item4 = document.createElement("div");
const item5 = document.createElement("div");
const item6 = document.createElement("div");
const item7 = document.createElement("div");
const item8 = document.createElement("div");
const item9 = document.createElement("div");
const item10 = document.createElement("div");
const item11 = document.createElement("div");
const item12 = document.createElement("div");
const item13 = document.createElement("div");
const item14 = document.createElement("div");
const item15 = document.createElement("div");
const item16 = document.createElement("div");

container.classList.add("container");

item1.classList.add("grid-squares");
item2.classList.add("grid-squares");
item3.classList.add("grid-squares");
item4.classList.add("grid-squares");
item5.classList.add("grid-squares");
item6.classList.add("grid-squares");
item7.classList.add("grid-squares");
item8.classList.add("grid-squares");
item9.classList.add("grid-squares");
item10.classList.add("grid-squares");
item11.classList.add("grid-squares");
item12.classList.add("grid-squares");
item13.classList.add("grid-squares");
item14.classList.add("grid-squares");
item15.classList.add("grid-squares");
item16.classList.add("grid-squares");

container.append(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16);
body.appendChild(container);