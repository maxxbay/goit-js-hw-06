const validBtnEl = document.querySelector("#validation-input");
validBtnEl.addEventListener("blur", onBlurCheck); //событие + функция
function onBlurCheck() {
  if (validBtnEl.value.length === Number(validBtnEl.dataset.length)) {
    validBtnEl.classList.add("valid");
    validBtnEl.classList.remove("invalid");
  } else {
    validBtnEl.classList.remove("valid");
    validBtnEl.classList.add("invalid");
  }
}
