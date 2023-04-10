// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw Error(`"${selection}" doesn't exist. Please check the selection`);
//   }
// }

// export default getElement;

export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`"${selection}" doesn't exist. Please check the selection`);
  }
}
