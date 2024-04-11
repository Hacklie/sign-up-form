"use strict";

const any = document.querySelector(`*`);
const errorMessage = document.querySelector(
  `.sign-up__mail-labels-validation-msg`
);
const emailInput = document.querySelector(`.sign-up__mail-email`);
const submit = document.querySelector(`.sign-up__mail`);
const signUp = document.querySelector(`.sign-up`);
const success = document.querySelector(`.success`);
const sendedMail = document.querySelector(`.success__description-mail`);
const successBtn = document.querySelector(`.success__btn`);

emailInput.addEventListener("invalid", function (event) {
  event.preventDefault();
  errorMessage.classList.remove(`hidden`);
  emailInput.style.backgroundColor = `hsla(4, 100%, 67%, 0.161)`;
  emailInput.style.border = `1px solid hsl(4, 100%, 67%)`;
});

any.addEventListener(`click`, (e) => {
  if (!errorMessage.classList.contains(`hidden`)) {
    errorMessage.classList.add(`hidden`);
    emailInput.style.backgroundColor = ``;
    emailInput.style.border = ``;
  }
});

submit.addEventListener(`submit`, (e) => {
  e.preventDefault();
  signUp.classList.add(`hidden`);
  success.classList.remove(`hidden`);
  sendedMail.textContent = emailInput.value;
});

success.addEventListener(`click`, (e) => {
  e.preventDefault();
  signUp.classList.remove(`hidden`);
  success.classList.add(`hidden`);
});
