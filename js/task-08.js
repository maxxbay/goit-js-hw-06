const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  let { email, password } = event.target.elements;
  //   email = email.value;
  //     password = password.value;
  if (email.value === "" || password.value === "") {
    return alert("Please enter a valid datainput");
  }

  const object = { email: email.value, password: password.value };
  console.log(object);

  event.target.reset();
}
