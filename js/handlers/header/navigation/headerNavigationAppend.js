const desktop = window.matchMedia("(min-width: 768px)");

const body = document.querySelector("body");

const container = document.querySelector(".header__container");
const navigation = document.querySelector(".header__navigation");
const button = document.querySelector(".header__button");

function appendButton() {
  if (desktop.matches == false) {
    body.prepend(navigation);
    navigation.append(button);
  } else {
    container.append(navigation);
    container.append(button);
  }
}

document.addEventListener("DOMContentLoaded", appendButton);
window.addEventListener("resize", appendButton);
