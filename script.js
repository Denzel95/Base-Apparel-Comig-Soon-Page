"use strict";

const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const submit = document.querySelector(".submit");
const icon = document.querySelector(".error-icon");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim(); //remove emptyspace after text
  //   console.log(inputValue);

  if (!isEmail(inputValue)) {
    error.style.display = "block";
    icon.style.display = "block";
  } else {
    error.style.display = "none";
    icon.style.display = "none";
  }
}
// Regex
function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
