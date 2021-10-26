const lines = document.querySelectorAll(".code-editor__editor__line");
const codeEditor = document.querySelector(".code-editor");

const codeReveal = gsap.timeline();

for (let line of lines) {
  codeReveal.fromTo(
    line,
    {
      x: "+=100",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.25,
      ease: "expo",
      duration: 2,
      scrollTrigger: {
        trigger: line,
        start: `-${codeEditor.clientHeight * 1.5}px top`,
        scrub: 1,
      },
    }
  );
}
