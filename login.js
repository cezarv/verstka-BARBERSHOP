var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".modal-login");
var loginClose = document.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".login-form");
var loginLogin = popup.querySelector(".login-icon-user");
var loginpassword = loginPopup.querySelector(".login-icon-password");

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});
loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.add("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.KeyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});
