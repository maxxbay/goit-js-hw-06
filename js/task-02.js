const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const allIng = document.querySelector("#ingredients");
// const newArray = [];
// ingredients.forEach((ing) => {
//   let liItem = document.createElement("li");
//   liItem.className = "item";
//   liItem.textContent = ing;
//   newArray.push(liItem);
// });
// allIng.append(...newArray);

const allIng = document.querySelector("#ingredients");
const arrayIng = ingredients
  .map((ing) => `<li class="item">${ing}</li>`)
  .join("");
allIng.insertAdjacentHTML("afterbegin", arrayIng);
