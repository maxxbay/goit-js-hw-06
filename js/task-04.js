let counterSum = {
  value: document.querySelector("#value"),
  value2: document.querySelector(`[data-action="decrement"]`),
  value3: document.querySelector(`[data-action="increment"]`),
};

let counter = 0;
counterSum.value2.addEventListener("click", () => {
  counter -= 1;
  counterSum.value.textContent = counter;
});

counterSum.value3.addEventListener("click", () => {
  counter += 1;
  counterSum.value.textContent = counter;
});
