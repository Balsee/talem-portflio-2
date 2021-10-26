const desktop = window.matchMedia("(min-width: 768px)");

const header = document.querySelector(".header");
const container = document.querySelector(".header__container");

// HEADER APPEAR

const headerReveal = gsap.timeline();

function headerRevealProperties() {
  headerReveal.from(header, {
    duration: 2,
    y: "-100%",
    opacity: 0,
    ease: "expo",
  });
}

// RUN FUNCTION AFTER WINDOW LOAD (BECAUSE OF THE APPEND THE NAVIGATION IS ALSO BEING PULLED OVER INTO THE GSAP ANIMATION - DON'T TOUCH, UNLESS BETTER SOLUTION IS POSSIBLE)

if (desktop.matches == true) {
  headerRevealProperties();
} else {
  window.addEventListener("load", headerRevealProperties);
}

export { headerReveal };
