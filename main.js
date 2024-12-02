// Selector
const password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirm-pass");
const invalidConfirm = document.querySelector(".invalid");

// Function
const validatePass = () => {
  const passVal = password.value;
  const confirmPassVal = confirmPassword.value;

  if(passVal !== confirmPassVal && passVal && confirmPassVal) {
    invalidConfirm.textContent = "⚠︎ Password is not match!";
    confirmPassword.classList.add("invalid");
    confirmPassword.classList.remove("valid")
  } else {
    invalidConfirm.textContent = "";
    confirmPassword.classList.add("valid");
    confirmPassword.classList.remove("invalid");
  }
}

// Event Listener
password.addEventListener("keyup", validatePass);
confirmPassword.addEventListener("keyup", validatePass);