/* 
Module is a file of a particular functionaility like data.js

Advantages of Modules - 
  - Avoid Global Namespace Collision 
  - Easy to Navigate because of less code
*/

import { random, people } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";
import getElement from "./utils/getElement.js";

const container = getElement(".container");
const btn = getElement(".btn");

/* Trying to access wrong class or one that doesn't exist */
// const containerOne = getElement(".containerOne");
// console.log(containerOne);

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
