import { headerReveal } from "../animation.js";

const desktop = window.matchMedia("(min-width: 768px)");

const header = document.querySelector(".header");
const navigation = document.querySelector(".header__navigation");

function classRemoval() {
  if (desktop.matches == true) {
    if (navigation.classList.contains("active")) {
      navigation.classList.remove("active");

      if (headerReveal.progress() === 0) {
        headerReveal.play();
      }
    }

    if (document.body.classList.contains("navigation-active")) {
      document.body.classList.remove("navigation-active");
    }
  }
}

window.addEventListener("resize", classRemoval);
