/* 
Module is a file of a particular functionaility like data.js

Advantages of Modules - 
  - Avoid Global Namespace Collision 
  - Easy to Navigate because of less code

Default Export - wile importing it can be any name like

import whatEverName from "./utils/showPeople.js";
*/

import { random, people } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
