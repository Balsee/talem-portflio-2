import { headerReveal } from "../animation.js";

const header = document.querySelector(".header");
const navigation = document.querySelector(".header__navigation");

const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  header.classList.add("hidden");
  navigation.classList.add("active");
  document.body.classList.add("navigation-active");

  headerReveal.reverse();
});
