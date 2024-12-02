// Selector
const password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirm-pass");
const invalidConfirm = document.querySelector(".invalid");

// Function
const validatePass = () => {
  const passVal = password.value;
  const confirmPassVal = confirmPassword.value;

  if(passVal !== confirmPassVal) {
    invalidConfirm.textContent = "Password is not match!";
  } else {
    invalidConfirm.textContent = "";
  }
}