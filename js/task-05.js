const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.target.value;
  if (textOutput.textContent === "") {
    textOutput.textContent = "Anonymous";
  }
});
