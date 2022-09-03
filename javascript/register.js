const registerForm = document.querySelector("form.register");

registerForm.addEventListener("submit", handleRegister);

function handleRegister(event) {
  event.preventDefault();
  const firstName = document.querySelector(`[name="firstName"]`);
  const errorLocation = document.querySelector("#error");
  errorLocation.innert = "";

  if (firstName.value.length < 2) {
    errorLocation.innerText =
      "Please enter at least 2 characters for your First Name!";
  }

  const lastName = document.querySelector(`[name="lastName"]`);
  if (lastName.value.length < 2) {
    errorLocation.innerText +=
      "\nPlease enter at least 2 characters for Last Name!";
  }

  const email = document.querySelector(`[name="email"]`);
  const regex = /[a-zA-Z]{2,}\@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/g;

  if (!email.value.match(regex)) {
    errorLocation.innerText += "\nPlease Enter a valid email address!";
  }

  const password = document.querySelector(`[name="password"]`);
  if (password.value.length < 6) {
    errorLocation.innerText += "\nPlease enter at least 6 characters";
  }

  if (!errorLocation.innerText) {
    const successLocation = document.querySelector("#success");
    successLocation.innerText += "\nCongratulations! You are registered!";
  }
}
