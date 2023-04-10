const people = [
  { name: "john", job: "developer" },
  { name: "susan", job: "designer" },
  { name: "anna", job: "the boss" },
];

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name}  <strong>${job}</strong></p>`;
    })
    .join("");
  console.log(newPeople);
  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => {
  showPeople();
});
