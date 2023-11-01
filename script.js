"use strict";
//?listing the html out to be able to use it in javascript
const button = document.querySelector("button");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const displayFirst = document.querySelector(".display-first");
const displayLast = document.querySelector(".display-last");
const displayEmail = document.querySelector(".display-email");
const displayPassword = document.querySelector(".display-password");
const icon = document.querySelectorAll(".error");
const input = document.querySelectorAll(".icon-error");

//?event listener
button.addEventListener("click", (e) => {
  input.forEach((inptBox) => {
    inptBox.style.borderColor = "hsl(0, 100%, 74%) ";
  });

  icon.forEach((image) => {
    image.style.display = "block";
  });

  if (firstName.value === "") {
    displayFirst.innerText = "first name cannot be empty";
  }
  if (lastName.value === "") {
    displayLast.innerText = "last name cannot be empty";
  }
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    displayEmail.innerText = "john@email.com";
  }

  if (password.value === "") {
    displayPassword.innerText = "password cannot be empty";
    console.log(displayPassword);
  } else {
    input.forEach((inptBox) => {
      inptBox.style.borderColor = "hsl(249, 10%, 26%)";
    });
    icon.forEach((image) => {
      image.style.display = "none";
    });

    image.style.display = "none";
    displayEmail.innerText = "";
    displayFirst.innerText = "";
    displayPassword.innerText = "";
    displayLast.innerText = "";
  }
});
