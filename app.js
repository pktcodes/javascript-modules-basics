/* 
Module is a file of a particular functionaility like data.js

Advantages of Modules - 
  - Avoid Global Namespace Collision 
  - Easy to Navigate because of less code
*/

import { random, people } from "./utils/data.js";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name}  <strong>${job}</strong></p>`;
    })
    .join("");
  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => {
  showPeople();
});
