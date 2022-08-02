const fontSizeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", fontSizeChange);

function fontSizeChange(event) {
  spanEl.style.fontSize = `${event.target.value}px`;
}
