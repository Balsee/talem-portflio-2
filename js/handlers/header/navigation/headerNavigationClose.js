import { headerReveal } from "../animation.js";

const close = document.querySelector(".header__navigation__close");

const header = document.querySelector(".header");
const navigation = document.querySelector(".header__navigation");

close.addEventListener("click", () => {
  header.classList.remove("hidden");
  navigation.classList.remove("active");
  document.body.classList.remove("navigation-active");

  headerReveal.play();
});
