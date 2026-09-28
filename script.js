var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contect-name").value.trim();
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  // two or more words; allows middle names, hyphens and apostrophes (Mary-Jane, O'Brien)
  if (!name.match(/^[A-Za-z'-]+(\s+[A-Za-z'-]+)+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contect-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone No. is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone No. should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone No. is required";
    return false;
  }
  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  var email = document.getElementById("contect-email").value.trim();
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }
  // allows digits/hyphens in the domain and multi-part endings (mail2.com, gmail.co.in)
  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

// --------------------
let eyeClose = document.getElementById("eyeClose");
let passwordInput = document.getElementById("contect-password");
eyeClose.addEventListener("click", () => {
  eyeClose.classList.toggle("fa-eye-slash");
  eyeClose.classList.toggle("fa-eye");
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    eyeClose.style.color = "#7c4585";
  } else {
    passwordInput.type = "password";
    eyeClose.style.color = "#555";
  }
});
// --------------------

function validatePassword() {
  var password = passwordInput.value;
  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    return false;
  }
  if (password.length < 8) {
    passwordError.innerHTML = "Min 8 characters";
    return false;
  }
  if (!password.match(/[A-Z]/)) {
    passwordError.innerHTML = "Add an uppercase letter";
    return false;
  }
  if (!password.match(/[a-z]/)) {
    passwordError.innerHTML = "Add a lowercase letter";
    return false;
  }
  if (!password.match(/[0-9]/)) {
    passwordError.innerHTML = "Add a number";
    return false;
  }
  if (!password.match(/[^A-Za-z0-9]/)) {
    passwordError.innerHTML = "Add a special character";
    return false;
  }
  passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateMessage() {
  var message = document.getElementById("contect-message").value;
  var required = 30;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + " more charecters required";
    return false;
  }
  messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validatePassword() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
