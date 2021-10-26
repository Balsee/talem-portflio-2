// const title = document.querySelector('.select-image__title');
// const menu = document.querySelector('.select-image__menu');
// const content = document.querySelector(".select-image__content");

const container = document.querySelectorAll(".select-image__container > *");

const revealElements = gsap.timeline();

for (let child of container) {
  revealElements.fromTo(
    child,
    {
      y: "+=100",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: child,
        start: `top 100%`,
        end: "+=200",
        scrub: 1,
        markers: true,
      },
    }
  );
}

// for (let child of container) {
//   console.log(child);
//
// }
