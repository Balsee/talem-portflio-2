// const section = document.querySelector("description__sections");
const elements = document.querySelectorAll("description__section");

// for (let element of elements) {

// }

gsap.fromTo(
  ".description__section",
  {
    y: 0,
  },
  {
    scrollTrigger: {
      trigger: ".description",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=500%",
      markers: true,
      // pinSpacing: false,
    },
    y: "-300%",
    ease: "none",
  }
);
