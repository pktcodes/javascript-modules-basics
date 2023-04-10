// const showPeople = (people) => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name}  <strong>${job}</strong></p>`;
//     })
//     .join("");
//   console.log(newPeople);
//   return newPeople;
// };

// export default showPeople;

/* 
Alternative way of Default export
  - but it is not helpful while checking errors  
*/
export default (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name}  <strong>${job}</strong></p>`;
    })
    .join("");
  console.log(newPeople);
  return newPeople;
};
